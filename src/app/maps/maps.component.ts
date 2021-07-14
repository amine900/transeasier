import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import * as MapboxTraffic from '@mapbox/mapbox-gl-traffic';
import { timer } from 'rxjs';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
})
export class MapsComponent implements OnInit {
  map: mapboxgl.Map;
  apiKey:string = 'ba00310406973fbac95e4965e6613d04';
  city: string;
  icon: string;
  description: string;
  temp: string;
  humidity: string;
  windSpeed: string;
  searchVal: string = '';
  dateTime: Date;
  constructor() {}

  ngOnInit(): void {
    if (mapboxgl.getRTLTextPluginStatus() !== 'loaded') {
      mapboxgl.setRTLTextPlugin(
        'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
        null
      );
    }
    (mapboxgl as any).accessToken = environment.mapboxKey;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [10.16579, 36.81897],
      zoom: 13,
    });
    this.map.addControl(
      new MapboxDirections({
        accessToken: mapboxgl.accessToken,
      }),
      'top-left'
    );
    this.map.on('load', () => {
      this.map.addControl(new MapboxTraffic(), 'bottom-left');
    });
    this.map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    this.fetchWeather('Sousse');
    this.dateTime = new Date()
    timer(0, 1000).subscribe(() => {this.dateTime = new Date()})
  }
  fetchWeather(city: string): void {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        city +
        '&units=metric&appid=' +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert('No weather found.');
          throw new Error('No weather found.');
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  }
  displayWeather(data: any): void {
    this.city = data.name;
    const { icon, description } = data.weather[0];
    this.icon = 'https://openweathermap.org/img/wn/' + icon + '.png';
    this.description = description;
    this.temp = data.main.temp + '°C';
    this.humidity = 'Humidity: ' + data.main.humidity + '%';
    this.windSpeed = 'Wind speed: ' + data.wind.speed + ' km/h';
  }
  search() {
    this.fetchWeather(this.searchVal);
  }
}

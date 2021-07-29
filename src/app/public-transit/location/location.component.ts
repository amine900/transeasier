import { Component, OnInit, Input } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { Transport } from '../model/transport';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  @Input() transport: Transport
  map: mapboxgl.Map;
  apiKey:string = 'ba00310406973fbac95e4965e6613d04';
  canvas: HTMLElement
  locationCoords: any;
  stationCoords: any;
  station = new mapboxgl.Marker()
  location = new mapboxgl.Marker()
  constructor() { }
  ngOnChanges(): void {
    if (mapboxgl.getRTLTextPluginStatus() !== 'loaded') {
      mapboxgl.setRTLTextPlugin(
        'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
        null
      );
    }
    (mapboxgl as any).accessToken = environment.mapboxKey;
    this.stationCoords = this.transport.stationCoords.split(",").map(x => Number(x));
    this.stationCoords = new mapboxgl.LngLat(this.stationCoords[0], this.stationCoords[1]);
    this.locationCoords = this.transport.location.split(",").map(x => Number(x));
    this.locationCoords = new mapboxgl.LngLat(this.locationCoords[0], this.locationCoords[1]);
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.locationCoords,
      zoom: 13,
    });
    this.map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    this.station.setLngLat(this.stationCoords).addTo(this.map)
    this.location.setLngLat(this.locationCoords).addTo(this.map)
  }
  ngOnInit(): void {
  }
}

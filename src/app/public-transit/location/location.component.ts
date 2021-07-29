import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  map: mapboxgl.Map;
  apiKey:string = 'ba00310406973fbac95e4965e6613d04';
  canvas: HTMLElement
  start = [-122.677738, 45.522458];
  station = new mapboxgl.Marker()
  location = new mapboxgl.Marker()
  constructor() { }

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
      center: [-122.677738, 45.522458],
      zoom: 13,
    });
    this.map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    this.getRoute(this.start);
    this.station.setLngLat([-122.677738, 45.522458])
      .addTo(this.map);
    this.location.setLngLat([-122.6774, 45.522450])
      .addTo(this.map);
    this.location.setLngLat([-122.6374, 45.522450])
  }
  getRoute(end) {
    // make a directions request using cycling profile
    // an arbitrary start will always be the same
    // only the end or destination will change
    var start = [-122.677738, 45.522458];
    var url = 'https://api.mapbox.com/directions/v5/mapbox/cycling/' + start[0] + ',' + start[1] + ';' + end[0] + ',' + end[1] + '?steps=true&geometries=geojson&access_token=' + mapboxgl.accessToken;

    // make an XHR request https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
    var req = new XMLHttpRequest();
    req.open('GET', url, true);
    
}
}

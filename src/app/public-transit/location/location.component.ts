import { Component, OnInit, Input } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transport } from '../model/transport';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  @Input() $transportObs: Observable<Transport>
  @Input() transport: Transport;
  map: mapboxgl.Map;
  apiKey:string = 'ba00310406973fbac95e4965e6613d04';
  canvas: HTMLElement
  locationCoords: any;
  stationCoords: any;
  station = new mapboxgl.Marker({
    color: "red",
    })
  location = new mapboxgl.Marker()
  busText: mapboxgl.Popup;
  stationText: mapboxgl.Popup;
  center: any
  stationName: string
  constructor() { }
  ngOnChanges(): void {
    this.$transportObs.subscribe(t => {
      this.stationCoords = t.stationCoords.split(",").map(x => Number(x));
      this.stationCoords = new mapboxgl.LngLat(this.stationCoords[0], this.stationCoords[1]);
      this.locationCoords = t.location.split(",").map(x => Number(x));
      this.locationCoords = new mapboxgl.LngLat(this.locationCoords[0], this.locationCoords[1]);
      this.station.setLngLat(this.stationCoords).addTo(this.map).setPopup(this.stationText);
      this.location.setLngLat(this.locationCoords).addTo(this.map).setPopup(this.busText);
    })
    this.center = this.transport.location.split(",").map(x => Number(x));
    this.center = new mapboxgl.LngLat(this.center[0], this.center[1]);
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
      center: this.center,
      zoom: 13,
    });
    console.log(1)
    this.busText = new mapboxgl.Popup()
      .setText("bus")
      .addTo(this.map);
    this.stationText = new mapboxgl.Popup()
      .setText(this.transport.station)
      .addTo(this.map);
    
    this.map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
  }
  ngOnInit(): void {
  }
}

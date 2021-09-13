import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Station } from 'src/app/models/station';
import { TransportServiceService } from 'src/app/public-transit/transport-service.service';
import { StationscrudService } from 'src/app/services/stationscrud.service';

@Component({
  selector: 'app-station-settings',
  templateUrl: './station-settings.component.html',
  styleUrls: ['./station-settings.component.css']
})
export class StationSettingsComponent implements OnInit {
  settings:boolean = false;
  selectedStation: Station;
  constructor(public transportService: TransportServiceService, private stationCrud: StationscrudService) { }

  ngOnInit(): void {
    this.transportService.getAll("stations").snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(stations => {this.transportService.stations = stations}
    )
  }
  selectStation(station) {
    this.settings = true
    
    this.selectedStation = station
    console.log(this.selectedStation)
  }
  onChangeStatus(key, newValue:string): void {
    console.log(newValue)
    this.stationCrud.update(key, {availability: newValue == "available" ? "unavailable": "available"});
}
  deletestation(key) {
    console.log(1)
    this.stationCrud.delete(key)
  }

}

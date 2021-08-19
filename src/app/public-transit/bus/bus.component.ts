import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Transport } from '../../models/transport';
import { TransportServiceService } from '../transport-service.service';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {
  $selectedBusObs: any;
  selectedBus: Transport;
  selectedStation: string = "";
  constructor(public busService: TransportServiceService) {
    
  }

 ngOnInit(): void {
   this.getAllBuses()
 }
 getAllBuses(){
   this.busService.getAll("buses").snapshotChanges().pipe(
    map(changes =>
      changes.map(c =>
        ({ key: c.payload.key, ...c.payload.val() })
      )
    )
  ).subscribe(
     rs => {
       rs.forEach(transport => {this.busService.reverseGeocoding(transport).subscribe(data => {
        transport.locationAddress = data["features"][0].place_name
        this.busService.buses = this.busService.filteredBuses = rs
        console.log(this.busService.filteredBuses)
        this.busService.filteredBuses = this.busService.filterTrans(rs)
        console.log(this.busService.filteredBuses)
      })})
     }
   )
 }
 selectBus(Bus: Transport) {
   this.$selectedBusObs = this.busService.getObj("/buses/" + Bus.key).valueChanges()
   this.selectedBus = Bus
 }
 selectStation(station:string) {
   this.selectedStation = station;
 }
}

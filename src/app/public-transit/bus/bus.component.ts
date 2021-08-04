import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transport } from '../model/transport';
import { TransportServiceService } from '../transport-service.service';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {
  $selectedBusObs: Observable<Transport>
  selectedBus: Transport
  constructor(public busService: TransportServiceService) {
    
  }

 ngOnInit(): void {
   this.getAllBuses()
 }
 getAllBuses(){
   this.busService.getAll("bus").valueChanges({idField: "id"}).subscribe(
     rs => {
       rs.forEach(transport => {this.busService.reverseGeocoding(transport).subscribe(data => {
        transport.locationAddress = data["features"][0].place_name
        this.busService.buses = this.busService.filteredBuses = rs
        this.busService.sortTrans(this.busService.buses);
        this.busService.filteredBuses = this.busService.filterTrans(rs)
      })})
       console.log(rs)
     }
   )
 }
 selectBus(Bus: Transport) {
   this.$selectedBusObs = this.busService.getAll("bus").doc(Bus.id).valueChanges()
   this.selectedBus = Bus
 }
}

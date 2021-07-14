import { Component, OnInit } from '@angular/core';
import { TransportServiceService } from '../transport-service.service';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {
  constructor(public busService: TransportServiceService) {
    
  }

 ngOnInit(): void {
   this.getAllBuses()
 }
 getAllBuses(){
   this.busService.getAll("bus").valueChanges({idField: "id"}).subscribe(
     rs => {
       console.log(rs)
       this.busService.buses = this.busService.filteredBuses = rs
       this.busService.sortTrans(this.busService.buses);
       this.busService.filteredBuses = this.busService.filterTrans(rs)
     }
   )
 }
}

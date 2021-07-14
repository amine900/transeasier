import { Component, OnInit } from '@angular/core';
import { TransportServiceService } from './transport-service.service';

@Component({
  selector: 'app-public-transit',
  templateUrl: './public-transit.component.html',
  styleUrls: ['./public-transit.component.css']
})
export class PublicTransitComponent implements OnInit {
  sort:string = "time"
  filteredLocation:string = ""
  filteredStation: string = ""

  constructor(private transportservice: TransportServiceService) { }

  ngOnInit(): void {
  }
  onChangeLocation(newValue:string): void {
    this.transportservice.location = newValue;
    this.transportservice.filterAll();
}
  onChangeStation(newValue:string): void {
    this.transportservice.station = newValue;
    this.transportservice.filterAll()
  }
  onChangeSort(newValue:string): void {
    this.transportservice.sortValue = newValue;
    this.transportservice.sortAll();
  }

}

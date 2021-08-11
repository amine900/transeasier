import { Component, Input, OnChanges } from '@angular/core';
import { TransportServiceService } from '../transport-service.service';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnChanges {
  @Input() station: string;
  timetable: any;
  constructor(private stationService:TransportServiceService) { }

  ngOnChanges(): void {
    this.stationService.getObj("/stations/" + this.station).valueChanges().subscribe(t => {this.timetable = t})
  }
}

import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';
import { AddStationComponent } from '../add-station/add-station.component';
import { AddTransportComponent } from '../add-transport/add-transport.component';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent implements OnInit {
  addTransportRef = AddTransportComponent;
  addStationRef = AddStationComponent;

  constructor(public Dialog: DialogService) { }

  ngOnInit(): void {
  }

}

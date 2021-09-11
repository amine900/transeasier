import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-transport',
  templateUrl: './update-transport.component.html',
  styleUrls: ['./update-transport.component.css']
})
export class UpdateTransportComponent implements OnInit {
  displayedColumns: string[] = ['station', 'arrival', 'delete'];
  stations = [{station: "hi", arrival:"20:00"},
  {station: "hello", arrival:"21:00"},
  {station: "bye", arrival:"22:00"}]
  constructor() { }

  ngOnInit(): void {
  }

}

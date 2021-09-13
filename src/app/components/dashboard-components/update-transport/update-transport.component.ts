import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-transport',
  templateUrl: './update-transport.component.html',
  styleUrls: ['./update-transport.component.css']
})
export class UpdateTransportComponent implements OnInit {
  @Input() Transport;
  displayedColumns: string[] = ['station', 'arrival', 'delete'];
  stations = [{station: "hi", arrival:"20:00"},
  {station: "hello", arrival:"21:00"},
  {station: "bye", arrival:"22:00"}]
  updateTransport:FormGroup;
  constructor(private fb: FormBuilder) {

   }

  ngOnInit(): void {
    this.Transport
    this.updateTransport = this.fb.group({
      stationsinputs: this.fb.array([this.build()])
    })
  }
  get stationsinputs(): FormArray {
    return this.updateTransport.get('stationsinputs') as FormArray;
  }
  build(): FormGroup {
    return this.fb.group({
    station: ['', Validators.required],
    arrival: ['', Validators.required]
    });
  }

}

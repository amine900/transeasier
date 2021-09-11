import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-transport',
  templateUrl: './add-transport.component.html',
  styleUrls: ['./add-transport.component.css']
})
export class AddTransportComponent implements OnInit {
  addTransport:FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addTransport = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      seats: ['', [Validators.required, Validators.min(1)]],
      longitude: ['', [Validators.required, Validators.minLength(3)]],
      latitude: ['', [Validators.required, Validators.minLength(3)]],
      stations: this.fb.array([this.build()])
    })
  }
  get stations(): FormArray {
    return this.addTransport.get('stations') as FormArray;
  }
  build(): FormGroup {
    return this.fb.group({
    station: ['', Validators.required],
    arrival: ['', Validators.required]
    });
  }
  addStation() {
    this.stations.push(this.build())
  } 

}

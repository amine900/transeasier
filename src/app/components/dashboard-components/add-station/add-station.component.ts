import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-station',
  templateUrl: './add-station.component.html',
  styleUrls: ['./add-station.component.css']
})
export class AddStationComponent implements OnInit {
  addStation:FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addStation = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      longitude: ['', [Validators.required, Validators.minLength(3)]],
      latitude: ['', [Validators.required, Validators.minLength(3)]],
      schedule: this.fb.array([this.build()])
    })
  }
  get schedule(): FormArray {
    return this.addStation.get('schedule') as FormArray;
  }
  build(): FormGroup {
    return this.fb.group({
    transport: ['', Validators.required],
    arrival: ['', Validators.required]
    });
  }
  addTransport() {
    this.schedule.push(this.build())
  }    
}

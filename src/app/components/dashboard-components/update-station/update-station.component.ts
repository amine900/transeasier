import { stringify } from '@angular/compiler/src/util';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Station } from 'src/app/models/station';
import { StationscrudService } from 'src/app/services/stationscrud.service';

@Component({
  selector: 'app-update-station',
  templateUrl: './update-station.component.html',
  styleUrls: ['./update-station.component.css']
})
export class UpdateStationComponent implements OnChanges {
  @Input() station: Station;
  updateStation: FormGroup;
  constructor(private fb: FormBuilder, private stationcrud: StationscrudService) { }

  ngOnChanges(): void {
    setTimeout(() => {
      console.log(this.station)
      for (const [key, value] of Object.entries(this.station.schedule)) {
        this.addTransport(key, stringify(value));
        console.log(key)
        console.log(value)
      }
    }, 100);
    this.updateStation = this.fb.group({
      transportsinputs: this.fb.array([])
    })
  }
  get transportsinputs(): FormArray {
    return this.updateStation.get('transportsinputs') as FormArray;
  }
  build(transport: string, arrival: string): FormGroup {
    return this.fb.group({
      transport: [transport, Validators.required],
      arrival: [arrival, Validators.required]
    });
  }
  addTransport(transport: string, arrival: string) {
    this.transportsinputs.push(this.build(transport, arrival))
  }
  deleteStation(index) {
    this.transportsinputs.removeAt(index)
  }
  
}

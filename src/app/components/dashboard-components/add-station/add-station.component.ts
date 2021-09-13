import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { StationscrudService } from 'src/app/services/stationscrud.service';

@Component({
  selector: 'app-add-station',
  templateUrl: './add-station.component.html',
  styleUrls: ['./add-station.component.css']
})
export class AddStationComponent implements OnInit {
  addStation:FormGroup;

  constructor(private fb: FormBuilder, private stationService:StationscrudService, private snackbar:SnackbarService) { }

  ngOnInit(): void {
    this.addStation = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      longitude: ['', [Validators.required, Validators.min(-180), Validators.max(80)]],
      type: ['bus', [Validators.required, Validators.minLength(3)]],
      latitude: ['', [Validators.required, Validators.min(-90), Validators.max(90)]],
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
  onSubmit() {
    console.log(`${this.addStation.get("name").value}/type`, this.addStation.get("type").value)
    this.stationService.setStation(this.addStation.get("name").value, {coords: `${this.addStation.get("longitude").value},${this.addStation.get("latitude").value}`})
    for (let index = 0; index < this.schedule.length; index++) {
      let id:string = this.schedule.get(`${index}.transport`).value
      let time:string = this.schedule.get(`${index}.arrival`).value
      this.stationService.setStation(`${this.addStation.get("name").value}/schedule/${id}`, time)
    }
    this.stationService.setStation(`${this.addStation.get("name").value}/type`, this.addStation.get("type").value).then(() => {"hi"}).catch((e) => {console.log(e)})
    this.snackbar.openSnackBar("station added succefully");
    this.addStation.reset();
  }
}

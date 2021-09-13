import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { StationscrudService } from 'src/app/services/stationscrud.service';
import { TransportcrudService } from 'src/app/services/transportcrud.service';

@Component({
  selector: 'app-add-transport',
  templateUrl: './add-transport.component.html',
  styleUrls: ['./add-transport.component.css']
})
export class AddTransportComponent implements OnInit {
  addTransport:FormGroup;
  constructor(private fb: FormBuilder, private transportService: TransportcrudService, private snackbar: SnackbarService, private StationsService: StationscrudService) { }

  ngOnInit(): void {
    this.addTransport = this.fb.group({
      type: ['', Validators.required],
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
  onSubmit() {
    this.transportService.setTransport(this.addTransport.get("type").value, `${this.addTransport.get("name").value}/location`, `${this.addTransport.get("longitude").value},${this.addTransport.get("latitude").value}`)
    this.transportService.setTransport(this.addTransport.get("type").value, `${this.addTransport.get("name").value}/totalSeats`, this.addTransport.get("seats").value)
    for (let index = 0; index < this.stations.length; index++) {
      var stationList:string = ""
      stationList = stationList + this.stations.get(`${index}.station`).value
      this.StationsService.getStationLocation(this.stations.get(`${index}.station`).value).valueChanges().subscribe(location => {
        if (index == 0) {
    this.transportService.setTransport(this.addTransport.get("type"), `${this.addTransport.get("name").value}/nextStation/arrival`, stationList)
    this.transportService.setTransport(this.addTransport.get("type"), `${this.addTransport.get("name").value}/nextStation/location`, stationList)
    this.transportService.setTransport(this.addTransport.get("type"), `${this.addTransport.get("name").value}/nextStation/name`, stationList)
        }
        this.transportService.setTransport(this.addTransport.get("type"), `${this.addTransport.get("name").value}/schedule/stations/${this.stations.get(`${index}.station`).value}/location`, location)
        this.transportService.setTransport(this.addTransport.get("type"), `${this.addTransport.get("name").value}/schedule/stations/${this.stations.get(`${index}.station`).value}/location`, this.stations.get(`${index}.arrival`).value)
      })
    }
    this.transportService.setTransport(this.addTransport.get("type"), `${this.addTransport.get("name").value}/stationsList`, stationList)
    this.snackbar.openSnackBar("added succefully");
    this.addTransport.reset();
  }

}

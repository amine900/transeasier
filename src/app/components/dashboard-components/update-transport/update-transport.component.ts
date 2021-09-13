import { Component, Input, OnChanges, OnInit, } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Transport } from 'src/app/models/transport';
import { StationscrudService } from 'src/app/services/stationscrud.service';
import { TransportcrudService } from 'src/app/services/transportcrud.service';

@Component({
  selector: 'app-update-transport',
  templateUrl: './update-transport.component.html',
  styleUrls: ['./update-transport.component.css']
})
export class UpdateTransportComponent implements OnChanges {
  @Input() transport: Transport;
  @Input() type: String;
  displayedColumns: string[] = ['station', 'arrival', 'delete'];
  updateTransport: FormGroup;
  constructor(private fb: FormBuilder, private transportService: TransportcrudService, private StationsService: StationscrudService) {

  }
  ngOnChanges(): void {
    setTimeout(() => {
      console.log(this.transport)
      for (const [key, value] of Object.entries(this.transport.stations)) {
        this.addStation(key, value["arrival"]);
        console.log(key)
      }
    }, 100);
    this.updateTransport = this.fb.group({
      stationsinputs: this.fb.array([])
    })

  }
  get stationsinputs(): FormArray {
    return this.updateTransport.get('stationsinputs') as FormArray;
  }
  build(station: string, arrival: string): FormGroup {
    return this.fb.group({
      station: [station, Validators.required],
      arrival: [arrival, Validators.required]
    });
  }
  addStation(station: string, arrival: string) {
    this.stationsinputs.push(this.build(station, arrival))
  }
  deleteStation(index) {
    this.stationsinputs.removeAt(index)
  }
  onSave() {
    for (let index = 0; index < this.stationsinputs.length; index++) {
      var stationList: string[] = []
      stationList.push(this.stationsinputs.get(`${index}.station`).value)
      this.StationsService.getStationLocation(this.stationsinputs.get(`${index}.station`).value).valueChanges().subscribe(location => {
        console.log(this.updateTransport.value)
        if (index == 0) {
          this.transportService.setTransport(this.type, `${this.transport.key}/nextStation/arrival`, this.stationsinputs.get(`${index}.arrival`).value)
          this.transportService.setTransport(this.type, `${this.transport.key}/nextStation/location`, location)
          this.transportService.setTransport(this.type, `${this.transport.key}/nextStation/name`, this.stationsinputs.get(`${index}.station`).value)
          this.transportService.setTransport(this.type, `${this.transport.key}/time`, this.stationsinputs.get(`${index}.arrival`).value)
          this.transportService.setTransport(this.type, `${this.transport.key}/station`, this.stationsinputs.get(`${index}.station`).value)
        }
        console.log(this.type, `${this.transport.key}/stations/${this.stationsinputs.get(`${index}.station`).value}/location`, location);
        console.log(this.type, `${this.transport.key}/stations/${this.stationsinputs.get(`${index}.station`).value}/location`, this.stationsinputs.get(`${index}.arrival`).value);
        this.transportService.setTransport(this.type, `${this.transport.key}/stations/${this.stationsinputs.get(`${index}.station`).value}/location`, location);
        this.transportService.setTransport(this.type, `${this.transport.key}/stations/${this.stationsinputs.get(`${index}.station`).value}/arrival`, this.stationsinputs.get(`${index}.arrival`).value)
      })
    }
  }
}

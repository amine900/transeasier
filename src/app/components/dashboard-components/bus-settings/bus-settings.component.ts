import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Transport } from 'src/app/models/transport';
import { TransportServiceService } from 'src/app/public-transit/transport-service.service';
import { TransportcrudService } from 'src/app/services/transportcrud.service';

@Component({
  selector: 'app-bus-settings',
  templateUrl: './bus-settings.component.html',
  styleUrls: ['./bus-settings.component.css']
})
export class BusSettingsComponent implements OnInit {
  settings:boolean = false;
  selectedBus: Transport
  constructor(public transportService: TransportServiceService, private transportCrud: TransportcrudService) { }

  ngOnInit(): void {
    this.transportService.getAll("buses").snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(buses => {this.transportService.buses = buses}
    )
  }
  show() {
    this.settings = !this.settings 
  }
  onChangeStatus(key, newValue:string): void {
    console.log(newValue)
    this.transportCrud.updateTransport('/buses', key, {availability: newValue == "available" ? "unavailable": "available"});
}
  deleteBus(key) {
    console.log(1)
    this.transportCrud.deleteTransport('/buses', key)
  }
  selectBus(bus) {

  }
}

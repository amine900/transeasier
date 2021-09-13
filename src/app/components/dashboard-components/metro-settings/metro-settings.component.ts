import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Transport } from 'src/app/models/transport';
import { TransportServiceService } from 'src/app/public-transit/transport-service.service';
import { TransportcrudService } from 'src/app/services/transportcrud.service';

@Component({
  selector: 'app-metro-settings',
  templateUrl: './metro-settings.component.html',
  styleUrls: ['./metro-settings.component.css']
})
export class MetroSettingsComponent implements OnInit {
  settings:boolean = false;
  selectedMetro: Transport;
  metro: "/metros"
  constructor(public transportService: TransportServiceService, private transportCrud: TransportcrudService) { }

  ngOnInit(): void {
    this.transportService.getAll("/metros").snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(metros => {this.transportService.metros = metros}
    )
  }
  onChangeStatus(key, newValue:string): void {
    console.log(newValue)
    this.transportCrud.updateTransport('/metros', key, {availability: newValue == "available" ? "unavailable": "available"});
}
deleteMetro(key) {
  console.log(1)
  this.transportCrud.deleteTransport('/metros', key)
}
selectMetro(metro) {
  this.selectedMetro = metro
  this.settings = true
  console.log(metro)
}
}

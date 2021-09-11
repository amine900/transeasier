import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { TransportServiceService } from 'src/app/public-transit/transport-service.service';

@Component({
  selector: 'app-bus-settings',
  templateUrl: './bus-settings.component.html',
  styleUrls: ['./bus-settings.component.css']
})
export class BusSettingsComponent implements OnInit {
  settings:boolean = false;

  constructor(public transportService: TransportServiceService) { }

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

}

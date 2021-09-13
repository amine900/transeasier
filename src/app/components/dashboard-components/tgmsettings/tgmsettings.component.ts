import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Transport } from 'src/app/models/transport';
import { TransportServiceService } from 'src/app/public-transit/transport-service.service';
import { TransportcrudService } from 'src/app/services/transportcrud.service';

@Component({
  selector: 'app-tgmsettings',
  templateUrl: './tgmsettings.component.html',
  styleUrls: ['./tgmsettings.component.css']
})
export class TGMSettingsComponent implements OnInit {
  settings:boolean = false;
  selectedTGM: Transport;
  TGM = "/TGM"
  constructor(public transportService: TransportServiceService, private transportCrud: TransportcrudService) { }

  ngOnInit(): void {
    this.transportService.getAll("/TGM").snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(TGM => {this.transportService.TGMlist = TGM}
    )
  }
  onChangeStatus(key, newValue:string): void {
    console.log(newValue)
    this.transportCrud.updateTransport('/TGM', key, {availability: newValue == "available" ? "unavailable": "available"});
}
  deleteTGM(key) {
    console.log(1)
    this.transportCrud.deleteTransport('/TGM', key)
  }
  selectTGM(tgm) {
    this.selectedTGM = tgm
    this.settings = true
  }


}

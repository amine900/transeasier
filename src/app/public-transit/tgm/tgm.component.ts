import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Transport } from '../../models/transport';
import { TransportServiceService } from '../transport-service.service';

@Component({
  selector: 'app-tgm',
  templateUrl: './tgm.component.html',
  styleUrls: ['./tgm.component.css']
})
export class TgmComponent implements OnInit {
  selectedTGM: Transport;
  $selectedTGMObs: any;
  selectedStation: string = "";
  constructor(public TGMservice: TransportServiceService) {
    
  }

 ngOnInit(): void {
   this.getAllTGM()
 }
 getAllTGM(){
   this.TGMservice.getAll("TGM").snapshotChanges().pipe(
    map(changes =>
      changes.map(c =>
        ({ key: c.payload.key, ...c.payload.val() })
      )
    )
  ).subscribe(
     rs => {
      rs.forEach(transport => {this.TGMservice.reverseGeocoding(transport).subscribe(data => {
        transport.locationAddress = data["features"][0].place_name
        this.TGMservice.TGMlist = this.TGMservice.filteredTGM = rs
        this.TGMservice.sortTrans(this.TGMservice.TGMlist);
        this.TGMservice.filteredTGM = this.TGMservice.filterTrans(rs)
      })})
     }
   )
 }
 selectTGM(TGM: Transport) {
  this.$selectedTGMObs = this.TGMservice.getObj("/TGM/" + TGM.key).valueChanges()
  this.selectedTGM = TGM
}
selectStation(station:string) {
  this.selectedStation = station;
}
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transport } from '../model/transport';
import { TransportServiceService } from '../transport-service.service';

@Component({
  selector: 'app-tgm',
  templateUrl: './tgm.component.html',
  styleUrls: ['./tgm.component.css']
})
export class TgmComponent implements OnInit {
  selectedTGM: Transport;
  $selectedTGMObs: Observable<Transport>;
  constructor(public TGMservice: TransportServiceService) {
    
  }

 ngOnInit(): void {
   this.getAllTGM()
 }
 getAllTGM(){
   this.TGMservice.getAll("TGM").valueChanges({idField: "id"}).subscribe(
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
  this.$selectedTGMObs = this.TGMservice.getAll("TGM").doc(TGM.id).valueChanges()
  this.selectedTGM = TGM
}
}

import { Component, OnInit } from '@angular/core';
import { TransportServiceService } from '../transport-service.service';

@Component({
  selector: 'app-tgm',
  templateUrl: './tgm.component.html',
  styleUrls: ['./tgm.component.css']
})
export class TgmComponent implements OnInit {
  constructor(public TGMservice: TransportServiceService) {
    
  }

 ngOnInit(): void {
   this.getAllTGM()
 }
 getAllTGM(){
   this.TGMservice.getAll("TGM").valueChanges({idField: "id"}).subscribe(
     rs => {
       console.log(rs)
       this.TGMservice.TGMlist = this.TGMservice.filteredTGM = rs;
       this.TGMservice.sortTrans(this.TGMservice.TGMlist);
      this.TGMservice.filteredTGM = this.TGMservice.filterTrans(rs);
     }
   )
 }
}

import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Transport } from '../../models/transport';
import { TransportServiceService } from '../transport-service.service';

@Component({
  selector: 'app-metro',
  templateUrl: './metro.component.html',
  styleUrls: ['./metro.component.css']

})
export class MetroComponent implements OnInit {
  selectedMetro: Transport;
  $selectedMetroObs: any;
  selectedStation: string = "";
  constructor(public metroService: TransportServiceService) {
    
   }

  ngOnInit(): void {
    this.getAllmetros()
  }
  getAllmetros(){
    this.metroService.getAll("metros").snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(
      rs => {
        rs.forEach(transport => {this.metroService.reverseGeocoding(transport).subscribe(data => {
          transport.locationAddress = data["features"][0].place_name
          this.metroService.metros = this.metroService.filteredMetros = rs
          this.metroService.sortTrans(this.metroService.metros);
          this.metroService.filteredMetros = this.metroService.filterTrans(rs)
        })})
      }
    )
  }
  selectMetro(Metro: Transport) {
    this.$selectedMetroObs = this.metroService.getObj("/metros/" + Metro.key).valueChanges()
    this.selectedMetro = Metro
  }
  selectStation(station:string) {
    this.selectedStation = station;
  }
}

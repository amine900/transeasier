import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transport } from '../model/transport';
import { TransportServiceService } from '../transport-service.service';

@Component({
  selector: 'app-metro',
  templateUrl: './metro.component.html',
  styleUrls: ['./metro.component.css']

})
export class MetroComponent implements OnInit {
  selectedMetro: Transport;
  $selectedMetroObs: Observable<Transport>;
  constructor(public metroService: TransportServiceService) {
    
   }

  ngOnInit(): void {
    this.getAllmetros()
  }
  getAllmetros(){
    this.metroService.getAll("metros").valueChanges({idField: "id"}).subscribe(
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
    this.$selectedMetroObs = this.metroService.getAll("metros").doc(Metro.id).valueChanges()
    this.selectedMetro = Metro
  }
}

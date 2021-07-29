import { Component, OnInit } from '@angular/core';
import { Transport } from '../model/transport';
import { TransportServiceService } from '../transport-service.service';

@Component({
  selector: 'app-metro',
  templateUrl: './metro.component.html',
  styleUrls: ['./metro.component.css']

})
export class MetroComponent implements OnInit {
  selectedMetro: Transport
  constructor(public metroService: TransportServiceService) {
    
   }

  ngOnInit(): void {
    this.getAllmetros()
  }
  getAllmetros(){
    this.metroService.getAll("metros").valueChanges({idField: "id"}).subscribe(
      rs => {
        console.log(rs)
        this.metroService.metros = this.metroService.filteredMetros = rs
        this.metroService.sortTrans(this.metroService.metros);
        this.metroService.filteredMetros = this.metroService.filterTrans(rs)
      }
    )
  }
  selectMetro(Metro: Transport) {
    this.selectedMetro = Metro
  }
}

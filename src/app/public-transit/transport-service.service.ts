import { Injectable } from '@angular/core';
import { Transport } from '../models/transport';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class TransportServiceService {
  location:string = "";
  station:string = "";
  metros:Transport[];
  filteredMetros: Transport[];
  buses:Transport[];
  filteredBuses: Transport[];
  TGMlist:Transport[];
  filteredTGM: Transport[];
  sortValue: String = "time"
  constructor(private db: AngularFireDatabase, private http: HttpClient) {
  }
  getAll(path: string):AngularFireList<Transport> {
    return this.db.list(path)
  }
  getObj(path: string): any {
    return this.db.object(path)
  }
  filterTrans(transport: Transport[]): Transport[] {
    return transport?.filter((mean: Transport) => 
    mean.locationAddress?.toLowerCase().includes(this.location.toLowerCase()) && mean.station?.includes(this.station.toLowerCase()));
  }
  sortTrans(transport: Transport[]): void {
    if (this.sortValue == "seats") {
      transport?.sort((a: Transport, b: Transport) => Number(b.seats) - Number(a.seats));
    } else {
      transport?.sort((a: Transport, b: Transport) => (a.time < b.time) ? -1 : ((a.time > b.time) ? 1 : 0));  
    }
  }

  filterAll(): void {
    this.filteredMetros = this.filterTrans(this.metros);
    this.filteredTGM = this.filterTrans(this.TGMlist);
    this.filteredBuses = this.filterTrans(this.buses);
  }
  sortAll(): void {
    this.sortTrans(this.filteredMetros);
    this.sortTrans(this.filteredTGM);
    this.sortTrans(this.filteredBuses);
  }
  reverseGeocoding(transport): any {
    let coords = transport.location
    console.log(coords)
    return this.http.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${coords}.json?access_token=${environment.mapboxKey}`)
  }
}

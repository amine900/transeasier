import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Transport } from './model/transport';

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
  constructor(private db: AngularFirestore) {
  }
  getAll(path: string):AngularFirestoreCollection<Transport> {
    return this.db.collection(path)
  }
  filterTrans(transport: Transport[]): Transport[] {
    return transport?.filter((mean: Transport) => 
    mean.location.includes(this.location) && mean.station.includes(this.station));
  }
  sortTrans(transport: Transport[]): void {
    if (this.sortValue == "seats") {
      transport?.sort((a: Transport, b: Transport) => Number(b.seats.substring(0,2)) - Number(a.seats.substring(0,2)));
    } else {
      transport?.sort((a: Transport, b: Transport) => Number(a.time.substring(0,2)) - Number(b.time.substring(0,2)));  
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

}

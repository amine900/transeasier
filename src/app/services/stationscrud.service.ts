import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Station } from '../models/station';

@Injectable({
  providedIn: 'root'
})
export class StationscrudService {
  path:string = "/stations";
  stationRef: AngularFireList<Station>;
  constructor(private db: AngularFireDatabase) { 
    this.stationRef = this.db.list(this.path);
  }
  getStations():AngularFireList<Station> {
    return this.stationRef
  }
  setStation(key:string, data: any) {
    return this.stationRef.set(key, data);
  }
  update(key:string, value:any): Promise<void> {
    return this.stationRef.update(key, value)
  }
  
  delete(key:string): Promise<void> {
    return this.stationRef.remove(key)
  }
}

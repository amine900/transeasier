import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Carpool } from '../models/carpool';

@Injectable({
  providedIn: 'root'
})
export class CarpoolService {
  path:string = '/carpool';
  carpoolRef: AngularFireList<Carpool>;
  constructor(private db: AngularFireDatabase) { 
    this.carpoolRef = this.db.list(this.path);
  }
  getRides():AngularFireList<Carpool> {
    return this.carpoolRef
  }
  create(ride: Carpool) {
    return this.carpoolRef.push(ride);
  }
}

import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Transport } from '../models/transport';

@Injectable({
  providedIn: 'root'
})
export class TransportcrudService {
  path:string = "/stations";
  constructor(private db: AngularFireDatabase) {
  }
  gettransport(t):AngularFireList<Transport> {
    return this.db.list(t)
  }
  setTransport(t, key:string, data:any) {
    return this.db.list(t).set(key, data);
  }
}

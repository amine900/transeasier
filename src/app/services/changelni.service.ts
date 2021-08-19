import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { ticket } from '../models/ticket';
@Injectable({
  providedIn: 'root'
})
export class ChagelniService {
  TicketRef: AngularFireList<ticket>;
  constructor(private db: AngularFireDatabase) {
  }
  get(operator):AngularFireList<ticket> {
    return this.db.list(`tickets/${operator}`)
  }
}

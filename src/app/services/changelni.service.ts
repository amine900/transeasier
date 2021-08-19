import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { ticket } from '../models/ticket';
@Injectable({
  providedIn: 'root'
})
export class ChagelniService {
  path:string = '/tickets';
  TicketRef: AngularFireList<ticket>;
  constructor(private db: AngularFireDatabase) { 
    this.TicketRef = this.db.list(this.path);
  }
  get():AngularFireList<ticket> {
    return this.TicketRef
  }
  create(tic: ticket) {
    return this.TicketRef.push(tic);
  }
}

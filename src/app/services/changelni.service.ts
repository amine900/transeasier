import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { ticket } from '../models/ticket';
import { park_auth } from '../models/ticket';
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
  getauth(){
    return this.db.list('parkAuth')
  }
  delete(key:string, operator: string): Promise<void> {
    return this.db.list(`tickets/${operator}`).remove(key)
  }
  create(authpark : park_auth){
   return this.getauth().push(authpark)
  }
}

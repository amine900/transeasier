import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsermanagementService {
  path:string = '/users';
  usersRef: AngularFireList<User>;
  constructor(private db: AngularFireDatabase) { 
    this.usersRef = this.db.list(this.path);
  }
  getUsers():AngularFireList<User> {
    return this.usersRef
  }
  update(key:string, value:any): Promise<void> {
    return this.usersRef.update(key, value)
  }
}

import { Injectable } from '@angular/core';
import { AngularFirestore,  AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { FeedBack } from '../models/feedback.model';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  feedbackscollection : AngularFirestoreCollection<FeedBack>;
feedbacks: Observable<FeedBack[]>
  constructor(private db: AngularFireDatabase , public afs: AngularFirestore) {
    this.feedbacks= this.afs.collection('Feedbacks').valueChanges()
   }
  addfeedback() {

  const user = AngularFireDatabase.auth().currentUser;
if (user !== null) {
  const displayName = user.displayName;
  const photoURL = user.photoURL;
  const uid = user.uid;
}
  }
getFeedbacks(){
  return.this.feedbacks
}}

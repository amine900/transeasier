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
  //adding the comment
  AddFeedback(feedback: FeedBack){
    this.feedbackscollection.push({
      
    })

  }


     //adding the current user name
     userName() {

      const user = AngularFireDatabase.auth().currentUser;
    if (user !== null) {
      const displayName = user.displayName;
      const photoURL = user.photoURL;
      const uid = user.uid;
    }
      }
      //list of feedbacks
  feedbackscollection : AngularFirestoreCollection<FeedBack>;
feedbacks: Observable<FeedBack[]>
  constructor(private db: AngularFireDatabase , public afs: AngularFirestore) {
    this.feedbackscollection=this.afs.collection('feedbacks')
    this.feedbacks= this.afs.collection('Feedbacks').snapshotChanges().map(changes =>{return changes.map(a => {
      const data = a.playload.doc.data() as FeedBack;
      data._id= a.playload.doc.id;
      return data
    })});
   }
getFeedbacks(){
  return.this.feedbacks
}
//deleting feedbacks
DeleteFeedback(id, feedBackId){
  this.feedbacks.emit()

}
}



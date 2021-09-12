import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { FeedBack } from '../models/feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  path:string = '/feedbacks';
  feedbackRef: AngularFireList<FeedBack>;
  commentRef: AngularFireObject<Comment>;
  constructor(private db: AngularFireDatabase) { 
    this.feedbackRef = this.db.list(this.path);
  }
  getfeedbacks():AngularFireList<FeedBack> {
    return this.feedbackRef;
  }
  create(feedback: FeedBack) {
    return this.feedbackRef.push(feedback);
  }
  deletefeedback(key:string): Promise<void> {
    return this.feedbackRef.remove(key);
  }
  update(key:string, value:any): Promise<void> {
    return this.feedbackRef.update(key, value)
  }

}

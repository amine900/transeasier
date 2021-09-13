import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { FeedBack } from '../models/feedback.model';
import { CommentsComponent } from '../popup/comments/comments.component';
import { AuthService } from '../services/auth.service';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {
  content:string = ""

  feedbacks: FeedBack[];

  constructor(public dialog: MatDialog, public feedbackService: FeedbackService, public auth: AuthService) { }

  ngOnInit(): void {
 this.feedbackService.getfeedbacks().snapshotChanges().pipe(
  map(changes =>
    changes.map(c =>
      ({ key: c.payload.key, ...c.payload.val() })
    )
  )
).subscribe(feedback => {this.feedbacks = feedback})

  }

  openDialog(feedBackId, comments, userId, feedback): void {
    console.log(feedback);

    const dialogRef = this.dialog.open(CommentsComponent, {
      height: "auto",
      width: "auto",
      data: {
        feedBackId,
        comments,
        userId

      },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  addfeedback() {
    this.auth.user$.subscribe(u => {this.feedbackService.create({created_at: Date.now()
    ,
    account_id: u,
  content: this.content})})

  }

}

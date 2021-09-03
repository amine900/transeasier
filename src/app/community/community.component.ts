import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommentsComponent } from '../popup/comments/comments.component';
import { FeedbackService } from '../services/feedback.service';
import { FeedBack } from '../models/feedback.model';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {

  feedbacks =  [
    {
      _id : "wa3333333333",
      account_id : {
        userName : "Wassim444"
      },
      created_at : "11pm",
      deletable : false,
      content : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?"
    },
    {
      _id : "88589a",
      account_id : {
        userName : "Cyrine"
      },
      created_at : "11pm",
      deletable : false,
      content : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?"
    },
    {
      _id : "88589a",
      account_id : {
        userName : "Wassim"
      },
      created_at : "11pm",
      deletable : false,
      content : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?"
    },
    {
      _id : "88589a",
      account_id : {
        userName : "Cyrine"
      },
      created_at : "11pm",
      deletable : false,
      content : "Salem"
    },
    {
      _id : "88589a",
      account_id : {
        userName : "Wassim"
      },
      created_at : "11pm",
      deletable : false,
      content : "Salem"
    },
    {
      _id : "88589a",
      account_id : {
        userName : "Cyrine"
      },
      created_at : "11pm",
      deletable : false,
      content : "Salem"
    },
    {
      _id : "88589a",
      account_id : {
        userName : "Wassim"
      },
      created_at : "11pm",
      deletable : false,
      content : "Salem"
    },
    {
      _id : "88589a",
      account_id : {
        userName : "Cyrine"
      },
      created_at : "11pm",
      deletable : false,
      content : "Salem"
    },
  ];

  constructor(public dialog: MatDialog, private feedbackService: FeedbackService) { }

  ngOnInit(): void {
 console.log("hani fil community");
 this.feedbackService.getFeedbacks().subscribe(feedbacks => {console.log(feedbacks)
  this.feedbacks = feedbacks;
});



  }

  openDialog(feedBackId): void {
    const dialogRef = this.dialog.open(CommentsComponent, {
      height: "auto",
      width: "auto",
      data: {
        feedBackId
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}

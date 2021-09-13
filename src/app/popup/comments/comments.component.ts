import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Comment } from 'src/app/models/comment.model';
import { AuthService } from 'src/app/services/auth.service';
import { FeedbackService } from 'src/app/services/feedback.service';
import { ComfirmDialogComponent } from '../comfirm-dialog/comfirm-dialog.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  myText: any = '';
  content: string;
  account_id: string;
  comments: Comment[];
  constructor(
    private feedbackSerice: FeedbackService,
    private auth: AuthService,
    @Inject(MAT_DIALOG_DATA)
     public data: any,
              private snackBar: MatSnackBar,
              public dialog: MatDialog,
              public router : Router ,
              public dialogRef: MatDialogRef<ComfirmDialogComponent>,
              private toastr: ToastrService
  ) {

  }

  ngOnInit(): void {
    console.log(this.data.feedBackId);
    this.comments = this.data.comments === undefined ? [] : this.data.comments
    console.log(this.data.comments)
  }

  addComment() {
    this.auth.user$.subscribe(u => {
      console.log("user :", this.data.userId + "== ? loc : " + localStorage.getItem('user'));
    //  const storedItems = JSON.parse(localStorage.getItem('user'));

      let comment:Comment = {account_id: u, content:this.myText, created_at:Date.now()}
      this.comments.push(comment);
      this.toastr.success("a comment has added")

        if(this.data.userId ==  localStorage.getItem('user')) {
          console.log("Salem");
                }
      this.feedbackSerice.update(this.data.feedBackId, {comment: this.comments});

    })
  }


}

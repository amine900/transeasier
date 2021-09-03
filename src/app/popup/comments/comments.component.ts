import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ComfirmDialogComponent } from '../comfirm-dialog/comfirm-dialog.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  myText: any = '';
  content: string;
  account_id: string;

  comments =  [
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
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
              private snackBar: MatSnackBar,
              public dialog: MatDialog,
              public router : Router ,
              public dialogRef: MatDialogRef<ComfirmDialogComponent>,
  ) { }

  ngOnInit(): void {
    console.log(this.data.feedBackId);
  }

  addComment(comment) {
    this.content = this.myText;
    this.comments.push(comment);
    //this.account_id = JSON.parse(localStorage.getItem('account'))._id;

    // this.apiService.apiPost(`file/comment/` + this.data.fileId,
    // {account_id: this.account_id, content: this.content}).subscribe((response: any) => {
    //   this.socket.emit('comment', this.data.fileId);
    //   console.log(response);
    //   this.myText = '';
    //   this.getFiles(this.data.fileId);
    // });
  }


}

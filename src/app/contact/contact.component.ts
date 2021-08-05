import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  durationInSeconds = 5;
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  openSnackBar(msg:string) {
    this._snackBar.open(msg, "",
      {duration: 1000});
  }
  public sendEmail(e: Event) {
    emailjs.sendForm('service_kyq25ko', 'template_2642o4o', e.target as HTMLFormElement, 'user_oYFYDsyNPZFmUXaKHhKsN')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        this.openSnackBar("submitted successfully")
      }, (error) => {
        console.log(error.text);
        this.openSnackBar("an error occured try again later")
      });
  }
}

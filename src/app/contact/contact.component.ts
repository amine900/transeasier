import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { SnackbarService } from '../services/snackbar.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(private snackbarService: SnackbarService) { }

  ngOnInit(): void {
  }
  public sendEmail(e: Event) {
    emailjs.sendForm('service_kyq25ko', 'template_2642o4o', e.target as HTMLFormElement, 'user_oYFYDsyNPZFmUXaKHhKsN')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        this.snackbarService.openSnackBar("submitted successfully")
      }, (error) => {
        console.log(error.text);
        this.snackbarService.openSnackBar("an error occured try again later")
      });
  }
}

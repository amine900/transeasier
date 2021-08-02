import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public sendEmail(e: Event) {
    emailjs.sendForm('service_kyq25ko', 'template_2642o4o', e.target as HTMLFormElement, 'user_oYFYDsyNPZFmUXaKHhKsN')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }



}

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-contact-driver',
  templateUrl: './contact-driver.component.html',
  styleUrls: ['./contact-driver.component.css']
})
export class ContactDriverComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public driver:User) { 
    console.log(driver)
  }

  ngOnInit(): void {
  }

}

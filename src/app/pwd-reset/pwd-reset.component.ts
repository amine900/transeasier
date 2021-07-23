import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-pwd-reset',
  templateUrl: './pwd-reset.component.html',
  styleUrls: ['./pwd-reset.component.css']
})
export class PwdResetComponent implements OnInit {
  email:string = ""
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}

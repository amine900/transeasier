import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  forgotPwd: boolean
  constructor(public auth: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: '',
      pwd: '',
    })
    this.forgotPwd = false
  }
  forgotPwdUpdate():void {
    this.forgotPwd = !this.forgotPwd
  }

}

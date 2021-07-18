import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  pwdForm: FormGroup;

  constructor(public auth: AuthService,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.auth.pwdmsg = ""
    this.pwdForm = this.fb.group({
      pwdGroup: this.fb.group({
        newpwd: ['', [Validators.required, Validators.minLength(8)]],
        confirmPwd: ['', Validators.required]
      }, {validator: this.pwdMatcher}),
    });
  }
  pwdMatcher(c: AbstractControl): { [key: string]: boolean } | null {
    const pwdControl = c.get('newpwd');
    const confirmControl = c.get('confirmPwd');
  
    if (pwdControl.pristine || confirmControl.pristine) {
      return null;
    }
  
    if (pwdControl.value === confirmControl.value) {
      return null;
    }
    return { match: true };
  }
}

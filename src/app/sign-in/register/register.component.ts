import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(public auth: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      pwdGroup: this.fb.group({
        pwd: ['', [Validators.required, Validators.minLength(8)]],
        confirmPwd: ['', Validators.required]
      }, {validator: this.pwdMatcher}),
      phone: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern("^[0-9]*$")]],
      address: ['', Validators.required]
    });
  }
  pwdMatcher(c: AbstractControl): { [key: string]: boolean } | null {
    const pwdControl = c.get('pwd');
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

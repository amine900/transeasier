import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  overviewForm: FormGroup;

  constructor(public auth: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.overviewForm = this.fb.group({
      firstName: ['first name', [Validators.required, Validators.minLength(3)]],
      lastName: ['last name', [Validators.required, Validators.minLength(3)]],
      email: ['user@gmail.com', [Validators.required, Validators.email]],
      phone: [
        '22222222',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(8),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      gender: 'null',
      birthDate: 'dd/mm/yyyy',
      bio: '',
    });
    this.auth.user$.subscribe(u => {
      this.overviewForm.patchValue({
        firstName: u.firstName,
        lastName: u.lastName,
        email: u.email,
        phone: u.phoneNumber,
        birthDate: u.birthDate,
        gender: u. gender,
        bio: u.bio
      })
    });
  }
  updateAll(fName: string, lName: string, email:string, phone: string, gender:string, bd:string, bio:string): void {
    this.auth.updateUserEmail(email);
    this.auth.updateUserData({firstName: fName, lastName: lName, phoneNumber:phone, gender:gender, birthDate:bd, bio:bio});
  }
}

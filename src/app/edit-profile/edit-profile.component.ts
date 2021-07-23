import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  username: string;
  pfpURL: string;
  modifiedpfp: string
  pfp:boolean = false;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.user$.subscribe((u) => {
      this.username = ([u.firstName, u.lastName]).join(" ")
      this.modifiedpfp = this.pfpURL = u.photoURL;
    });
  }
  changepfpStatus(): void {
    this.pfp = !this.pfp;
  }
}

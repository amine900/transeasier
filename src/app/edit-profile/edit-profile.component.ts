import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  username: string;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(u => {
      this.username = ([u.firstName, u.lastName]).join(" ")
    });
  }
}

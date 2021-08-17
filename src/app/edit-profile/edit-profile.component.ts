import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
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
  uid: string
  constructor(private auth: AuthService, private fst: AngularFireStorage) {}

  ngOnInit(): void {
    this.auth.user$.subscribe((u) => {
      this.uid = u.uid
      this.username = ([u.firstName, u.lastName]).join(" ")
      this.modifiedpfp = this.pfpURL = u.photoURL;
    });
  }
  changepfpStatus(): void {
    this.pfp = !this.pfp;
  }
  updatepfp(event) {
    this.fst.ref(this.uid).put(event.target.files[0]).then(data => {data.ref.getDownloadURL().then(url => {
      this.auth.updateUserData({photoURL: url})
    })})
  }
}

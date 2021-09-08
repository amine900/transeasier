import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<User>;
  admin:boolean = false;
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router,
    private snackbarService: SnackbarService
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          this.db.object(`users/${user.uid}`).valueChanges().subscribe((u: User) => {this.admin = u.role == "admin"})
          return this.db.object<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }
  emailSignin(email: string, pwd: string) {
    const credential = this.afAuth.signInWithEmailAndPassword(email, pwd);
    credential
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch((e) => {
        if (e.code == 'auth/user-not-found') {
          this.snackbarService.openSnackBar('invalid email address');
        } else if (e.code == 'auth/wrong-password') {
          this.snackbarService.openSnackBar('invalid password');
        } else {
          this.snackbarService.openSnackBar('error. try again later');
        }
      });
  }
  signUp(
    email: string,
    pwd: string,
    firstName: string,
    lastName: string,
    phonenumber: string,
    address: string
  ) {
    const credential = this.afAuth.createUserWithEmailAndPassword(email, pwd);
    credential
      .then((Credential) => {
        const user = Credential.user;
        const userRef: AngularFireList<User> = this.db.list(
          `users`
        );
        const data = {
          uid: user.uid,
          email: user.email,
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phonenumber,
          role: 'client',
          photoURL: "https://s.clipartkey.com/mpngs/s/273-2737919_default-profile.png",
          address: address,
          gender: 'null',
          birthDate: 'dd/mm/yyyy',
          bio: '',
        };
        userRef.set(user.uid, data);
        this.router.navigate(['/home']);
      })
      .catch((e) => {
        this.snackbarService.openSnackBar(e);
      });
  }

  updateUserData(data: any) {
    const user = firebase.auth().currentUser;
    const userRef: AngularFireList<User> = this.db.list(
      `users`
    );
    userRef.update(user.uid, data);
  }

  signOut() {
    this.afAuth
      .signOut()
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  getAllUsers(): AngularFireList<User> {
    return this.db.list('users');
  }
  updateUserEmail(email: string): void {
    const user = firebase.auth().currentUser;
    this.updateUserData({ email: email });
    user
      .updateEmail(email)
      .then(() => {
        this.snackbarService.openSnackBar('updated successfully');
      })
      .catch((e) => {
        this.snackbarService.openSnackBar(e);
      });
  }
  resetPwd(email) {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        this.snackbarService.openSnackBar("password reset email sent")
      })
      .catch(() => {
        this.snackbarService.openSnackBar("email not found")
      });
  }
  changePwd(pwd) {
    const user = firebase.auth().currentUser;

    user
      .updatePassword(pwd)
      .then(() => {
        this.snackbarService.openSnackBar('updated successfully')
      })
      .catch((error) => {
        this.snackbarService.openSnackBar('an error occured. try again later')
      });
  }
}

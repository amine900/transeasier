import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import {MatSnackBar} from '@angular/material/snack-bar';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<User>;
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
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
          this.openSnackBar('invalid email address');
        } else if (e.code == 'auth/wrong-password') {
          this.openSnackBar('invalid password');
        } else {
          this.openSnackBar('error. try again later');
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
        const userRef: AngularFirestoreDocument<User> = this.afs.doc(
          `users/${user.uid}`
        );
        const data = {
          uid: user.uid,
          email: user.email,
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phonenumber,
          photoURL: "https://s.clipartkey.com/mpngs/s/273-2737919_default-profile.png",
          address: address,
          gender: 'null',
          birthDate: 'dd/mm/yyyy',
          bio: '',
        };
        userRef.set(data, { merge: true });
        this.router.navigate(['/home']);
      })
      .catch((e) => {
        this.openSnackBar(e);
      });
  }

  updateUserData(data: any) {
    const user = firebase.auth().currentUser;
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );
    userRef.update(data);
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
  getAllUsers(): AngularFirestoreCollection<User> {
    return this.afs.collection('users');
  }
  updateUserEmail(email: string): void {
    const user = firebase.auth().currentUser;
    this.updateUserData({ email: email });
    user
      .updateEmail(email)
      .then(() => {
        this.openSnackBar('updated successfully');
      })
      .catch((e) => {
        this.openSnackBar(e);
      });
  }
  resetPwd(email) {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        this.openSnackBar("password reset email sent")
      })
      .catch(() => {
        this.openSnackBar("email not found")
      });
  }
  changePwd(pwd) {
    const user = firebase.auth().currentUser;

    user
      .updatePassword(pwd)
      .then(() => {
        this.openSnackBar('updated successfully')
      })
      .catch((error) => {
        this.openSnackBar('an error occured. try again later')
      });
  }
  openSnackBar(msg:string) {
    this._snackBar.open(msg, "",
      {duration: 1000});
  }
}

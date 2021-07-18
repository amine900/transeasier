import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
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
  signUpError: string;
  signInError: string;
  overviewmsg: string;
  pwdmsg: string;
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
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
          this.signInError = 'invalid email address';
        } else if (e.code == 'auth/wrong-password') {
          this.signInError = 'invalid password';
        } else {
          this.signInError = 'error. try again later';
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
          address: address,
          gender: 'null',
          birthDate: 'dd/mm/yyyy',
          bio: '',
        };
        userRef.set(data, { merge: true });
        this.router.navigate(['/home']);
      })
      .catch((e) => {
        this.signUpError = e;
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
        this.overviewmsg = 'updated successfully';
      })
      .catch((e) => {
        this.overviewmsg = e;
      });
  }
  resetPwd(email) {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {})
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  }
  changePwd(pwd) {
    const user = firebase.auth().currentUser;

    user
      .updatePassword(pwd)
      .then(() => {
        this.pwdmsg = 'updated successfully'
      })
      .catch((error) => {
        this.pwdmsg = 'an error occured. try again later'
      });
  }
}

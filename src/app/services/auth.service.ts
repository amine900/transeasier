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
import { createThis } from 'typescript';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<User>;
  signUpError:string;
  signInError:string;
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
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
        this.router.navigate(["/home"])
      })
      .catch((e) => {
        if (e.code == "auth/user-not-found") {
          this.signInError = "invalid email address"
        } else if (e.code == "auth/wrong-password"){
          this.signInError = "invalid password"
        } else {
          this.signInError = "error. try again later"
        };
      });
  }
  signUp(email: string, pwd: string, name: string, phonenumber: string, address: string) {
    const credential = this.afAuth.createUserWithEmailAndPassword(email, pwd);
    credential
      .then((Credential) => {
        const user = Credential.user
        const userRef: AngularFirestoreDocument<User> = this.afs.doc(
          `users/${user.uid}`
        );
        const data = {
          uid: user.uid,
          email: user.email,
          displayName: name,
          phoneNumber: phonenumber,
          address: address
        };
        userRef.set(data, { merge: true });
        this.router.navigate(["/home"])
      })
      .catch((e) => {
        this.signUpError = e
      });
  }

  updateUserData(user: User, data: any) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );
    userRef.update(data);
  }

  signOut() {
    this.afAuth.signOut().then(() =>
      {this.router.navigate(['/home'])}
    ).catch(e => console.log(e));
  }
  getAllUsers(): AngularFirestoreCollection<User>{
    return this.afs.collection('users')
  }
}

import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthService {
  token: string = null;
  constructor(private router: Router) {}
  signup(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(
      error => console.log(error)
    );
  }
  signinUser (email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      response => {
         this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken().then(
        (token: string) => this.token = token
      ); }
    ).catch(
      error => console.log(error)
    );
  }
  getToken() {
    firebase.auth().currentUser.getIdToken().then(
      (token: string) => this.token = token
    );
    return firebase.auth().currentUser.getIdToken();
  }
  isAuthenticaded() {
    return this.token != null;
  }
  logoout() {
    firebase.auth().signOut();
    this.token = null;
  }
}

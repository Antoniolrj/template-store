import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

import 'firebase/compat/auth'
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private router: Router,
    private cookiesService: CookieService
  ) { }

  token: string = "";

  login(email: string, password: string){
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(data => {
          firebase.auth().currentUser?.getIdToken()
            .then(token => {
              this.token = token
              this.cookiesService.set("token", this.token)
              this.router.navigate(['/'])
            })
        })
  }

  registerUser(email: string, password: string){
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  }

  getIdToken(){
    return this.cookiesService.get("token")
  }

  getCurrentUser(){
    return firebase.auth().currentUser
  }

  isLogged(){
    if(this.getIdToken() != "") return true
    else return false
  }

  logOut(){
    firebase.auth().signOut()
      .then(() => {
        this.token = ""
        this.cookiesService.set("token", this.token)
        this.router.navigate(['/login'])
      })
  }

  firebaseError(code: string){
    switch(code){
      case 'auth/email-already-in-use':
        return 'User already exists';

      case 'auth/weak-password':
        return 'Weak password'

      case 'auth/invalid-email':
        return 'Invalid Email'

      default:
        return 'Unknown error'
    }
  }

}

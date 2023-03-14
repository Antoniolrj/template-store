import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

import 'firebase/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private router: Router
  ) { }

  token: string = "";

  login(email: string, password: string){
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(data => {
          firebase.auth().currentUser?.getIdToken()
            .then(token => {
              this.token = token
              this.router.navigate(['/'])
            })
        })
  }

  registerUser(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user)
        this.router.navigate(['/login'])
      })
  }

  getIdToken(){
    return this.token
  }

  isLogged(){
    if(this.token != "") return true
    else return false
  }

  logOut(){
    firebase.auth().signOut()
      .then(() => {
        this.token = ""
        this.router.navigate(['/login'])
      })
  }

}

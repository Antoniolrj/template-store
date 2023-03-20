import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterEvent } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  messageError: string = ''

  constructor(
    private loginService: LoginService,
    private router: Router
  ){}

  login(form: NgForm){
    const email = form.value.email
    const password = form.value.password

    this.loginService.login(email, password)
      .then(data => {
        this.loginService.getCurrentUser()?.getIdToken()
          .then(token => {
            this.loginService.setToken(token)
            this.router.navigate(['/'])
          })
      })
      .catch(error => this.messageError = this.loginService.firebaseError(error.code))
  }

}

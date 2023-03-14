import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private loginService: LoginService
  ){}

  login(form: NgForm){
    const email = form.value.email
    const password = form.value.password

    this.loginService.login(email, password)
  }

}

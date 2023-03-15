import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  messageError: string = ""

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {

  }

  register(form: NgForm){

    const email = form.value.email
    const password = form.value.password

    this.loginService.registerUser(email, password)
      .then(response => {
        this.router.navigate(['login'])
      })
      .catch(error => this.messageError = this.loginService.firebaseError(error.code))
  }

}

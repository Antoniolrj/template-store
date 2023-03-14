import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) {}

  ngOnInit(): void {

  }

  register(form: NgForm){

    const email = form.value.email
    const password = form.value.password

    this.loginService.registerUser(email, password)

  }

}

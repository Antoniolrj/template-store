import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

import { StoreService } from '../../services/store.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeMenu = false;
  showCart = false;
  counter = 0;
  username = ''

  constructor(
    private storeService: StoreService,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    });
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  btnLogin(){
    this.router.navigate(['login'])
  }

  openCart() {
    this.showCart = !this.showCart
  }

  isLogged(){
    return this.loginService.isLogged()
  }

  loggedOut(){
    this.loginService.logOut()
  }

  currentUser(){
    this.username = this.loginService.getCurrentUser()?.email || ''
    return this.username
  }

}

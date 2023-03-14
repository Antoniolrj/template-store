import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

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

  constructor(
    private storeService: StoreService,
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

}

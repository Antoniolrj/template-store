import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable();

  constructor() {
    this.myShoppingCart = JSON.parse(localStorage.getItem('cart') || "[]")
    this.myCart.next(this.myShoppingCart)
  }

  addProduct(product: Product) {
    this.myShoppingCart.push(product);
    localStorage.setItem('cart', JSON.stringify(this.myShoppingCart))
    this.myCart.next(this.myShoppingCart);
  }

  getShoppingCart() {
    return this.myShoppingCart;
  }

  getTotal() {
    return this.myShoppingCart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  }

  deleteItem(product: Product) {
    this.myShoppingCart = this.myShoppingCart.filter(item => item != product)
    localStorage.setItem('cart', JSON.stringify(this.myShoppingCart))
    this.myCart.next(this.myShoppingCart);
  }

  updateQty(product: Product) {
    this.myShoppingCart.map((item) => {
      if(item.id == product.id){
        item.qty = product.qty
      }
    })
    localStorage.setItem('cart', JSON.stringify(this.myShoppingCart))
    this.myCart.next(this.myShoppingCart);
  }
}

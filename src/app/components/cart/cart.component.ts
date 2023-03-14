import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: Product[] = []

  constructor(
    private storeService: StoreService
  ){}

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.cart = products
    });
  }

  clearCart() {
    this.cart = []
  }

  deletedToShoppingCart(product: Product){
    this.storeService.deleteItem(product)
  }

}

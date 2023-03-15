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
  total: number = 0

  constructor(
    private storeService: StoreService
  ){}

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.cart = products
    });

    this.total = this.storeService.getTotal()
  }

  clearCart() {
    this.cart = []
  }

  deletedToShoppingCart(product: Product){
    this.storeService.deleteItem(product)
    this.total = this.storeService.getTotal()
  }

  updateQty(product: Product){
    this.storeService.updateQty(product)
    this.total = this.storeService.getTotal()
  }

}

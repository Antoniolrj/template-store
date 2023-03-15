import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model'

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent {

  @Input() product: Product = {
    id: '',
    price: 0,
    images: [],
    title: '',
    category: {
      id:'',
      name:'',
    },
    description: '',
    qty: 1
  };

  @Output() deletedProduct = new EventEmitter<Product>();
  @Output() updateQtyItem = new EventEmitter<Product>();

  deleteProduct(){
    this.deletedProduct.emit(this.product)
  }

  upQtyItem() {
    this.product.qty++
    this.updateQtyItem.emit(this.product)
  }

  downQtyItem() {
    this.product.qty--
    this.updateQtyItem.emit(this.product)
  }

}

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
    description: ''
  };

  @Output() deletedProduct = new EventEmitter<Product>();

  deleteProduct(){
    this.deletedProduct.emit(this.product)
  }

}

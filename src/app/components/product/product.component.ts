import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

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
  @Output() addedProduct = new EventEmitter<Product>();

  @ViewChild("qty") inputQty!: ElementRef;


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.inputQty.nativeElement.value = 1
  }

  onAddToCart() {
    var qtyNumber: number = +this.inputQty.nativeElement.value
    this.product.qty = qtyNumber
    this.addedProduct.emit(this.product);
  }
}

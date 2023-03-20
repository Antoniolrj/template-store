import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { throwError, of } from "rxjs";
import { catchError } from "rxjs/operators";


@Component({
  selector: 'app-page-product',
  templateUrl: './page-product.component.html',
  styleUrls: ['./page-product.component.scss']
})
export class PageProductComponent implements OnInit {

  id: number
  product: Product
  productNotFoundMessage: string

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']

    this.productsService.getProduct(this.id)
      .pipe(
        catchError(() => {
          return throwError(() => this.productNotFoundMessage = 'Product not found')
        })
      )
      .subscribe(data => this.product = data)
  }
}

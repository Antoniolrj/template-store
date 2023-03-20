import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from './../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  URL_BASED = ' https://api.escuelajs.co/api/v1/'
  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>(this.URL_BASED + 'products');
  }

  getAllProductsByPage(offset: number, limit: number){
    let queryParams = new HttpParams()
    queryParams = queryParams.append("offset", offset)
    queryParams = queryParams.append("limit", limit)
    return this.http.get<Product[]>(this.URL_BASED + 'products', { params: queryParams });
  }

  getProduct(id: number){
    return this.http.get<Product>(this.URL_BASED + 'products/' + id)
  }
}

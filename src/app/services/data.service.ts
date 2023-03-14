import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  saveProduct(product: Product){
    this.http.post('https://template-store-e0495-default-rtdb.europe-west1.firebasedatabase.app/datos.json', product)
  }
}

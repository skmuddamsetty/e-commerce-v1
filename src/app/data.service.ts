import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  product: Product[] = [
    {
      productName: ' Black Smartwatch',
      rating: '*****',
      price: '$290.00'
    },
    {
      productName: ' Black Smartwatch',
      rating: '*****',
      price: '$290.00'
    }
  ];

  constructor() {}
  getProduct() {
    return this.product;
  }
  addProduct(data: Product) {
    this.product.push(data);
    console.log(this.product);
  }
}

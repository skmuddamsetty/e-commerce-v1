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
      price: '$290.00',
      category: 'Clocks'
    },
    {
      productName: ' Black Smartwatch',
      rating: '*****',
      price: '$290.00',
      category: 'Electronics'
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

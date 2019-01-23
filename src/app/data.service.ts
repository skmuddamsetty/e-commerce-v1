import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  product = [
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
  addProduct(data: any) {
    this.product.push(data);
    console.log(this.product);
  }
}

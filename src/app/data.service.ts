import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _itemsInCart: BehaviorSubject<number> = new BehaviorSubject(0);
  private _itemsInWishList: BehaviorSubject<number> = new BehaviorSubject(0);
  product: Product[] = [
    // {
    //   productName: ' Black Smartwatch',
    //   rating: '*****',
    //   price: '$290.00',
    //   category: 'Clocks'
    // },
    // {
    //   productName: ' Black Smartwatch',
    //   rating: '*****',
    //   price: '$290.00',
    //   category: 'Electronics'
    // }
  ];
  myCart = [
    // {
    //   productName: 'Book 1',
    //   price: 'author'
    // }
  ];
  wishList = [
    // {
    //   productName: 'Book 1',
    //   price: 'author'
    // }
  ];

  getNumberOfItemsInCart() {
    return this._itemsInCart.asObservable();
  }

  setNumberOfItemsInCart(count: number) {
    console.log('setNumberOfItemsInCart', count);
    this._itemsInCart.next(count);
  }
  getNumberOfItemsInWishList() {
    return this._itemsInWishList.asObservable();
  }
  setNumberOfItemsInwishList(count: number) {
    console.log('setNumberOfItemsInWishList', count);
    this._itemsInWishList.next(count);
  }

  constructor() {}
  getProduct() {
    return this.product;
  }
  getMyCart() {
    return this.myCart;
  }
  getWishList() {
    return this.wishList;
  }
  addProduct(data: Product) {
    this.product.push(data);
    console.log(this.product);
  }

  // add method to add product to database

  addProducttoDB(data: Product) {
    this.product.push(data);
    console.log(this.product);
  }
  addToCart(data: any) {
    this.myCart.push(data);
    console.log(this.myCart);
  }
  addToWishList(data: any) {
    this.wishList.push(data);
    console.log(this.wishList);
  }
}

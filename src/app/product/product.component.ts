import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { ProductId } from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  // @Input() productName: string;
  // @Input() rating: string;
  // @Input() price: string;
  @Input() product: ProductId;
  currentNumberofItemInCart = 0;
  currentNumberofItemInWishList = 0;
  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.dataService.getNumberOfItemsInCart().subscribe(numberOfItemsinCart => {
      this.currentNumberofItemInCart = numberOfItemsinCart;
      console.log(
        'this.currentNumberofItemInCart',
        this.currentNumberofItemInCart
      );
    });
    this.dataService
      .getNumberOfItemsInWishList()
      .subscribe(numberOfItemsInWishList => {
        this.currentNumberofItemInWishList = numberOfItemsInWishList;
        console.log(
          'this.currentNumberofItemInWishList',
          this.currentNumberofItemInWishList
        );
      });
  }
  addToCart(productName: string, price: string) {
    // this.books = this.dataService.getBookCart();
    const product = {
      productName: productName,
      price: price
    };
    this.dataService.addToCart(product);
    this.dataService.setNumberOfItemsInCart(this.currentNumberofItemInCart + 1);

    console.log('products');
  }
  addToWishList(productName: string, price: string) {
    const wishProduct = {
      productName: productName,
      price: price
    };
    this.dataService.addToWishList(wishProduct);
    this.dataService.setNumberOfItemsInwishList(
      this.currentNumberofItemInWishList + 1
    );
    console.log('products');
  }
}

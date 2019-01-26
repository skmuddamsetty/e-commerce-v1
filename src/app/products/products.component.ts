import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
// import { Product } from './models/product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  product = [];

  constructor(public dataService: DataService) {
    // this.product = this.dataService.getProduct();
    //  console.log(this.product);
  }

  ngOnInit() {}
  onCategorySelect(category: string) {
    if (category === 'Clocks') {
      this.product = this.dataService.getProduct();
      // this.product = this.product.filter(
      //   product => product.category === 'Clocks'
      // );
      // this._books = this.db.collection('newBooks').valueChanges();
      console.log(this.product);
    } else if (category === 'Electronics') {
      this.product = this.dataService.getProduct();
      // this._books = this.db.collection('discountedBooks').valueChanges(); //reading data from data base
      console.log(this.product);
    } else if (category === 'Gadjets') {
      this.product = this.dataService.getProduct();
      console.log(this.product);
    }
  }
}

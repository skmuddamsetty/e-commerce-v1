import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
// import { Product } from './models/product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  // product = [];
  product: Observable<any[]>;
  constructor(public dataService: DataService, public db: AngularFirestore) {
    // this.product = this.dataService.getProduct();
    //  console.log(this.product);
  }

  ngOnInit() {
    this.product = this.db.collection('clocks').valueChanges();
  }
  onCategorySelect(category: string) {
    if (category === 'Clocks') {
      // this.product = this.dataService.getProduct();
      // this.product = this.product.filter(
      //   temp =>  temp.category === 'Clocks'
      // );
      this.product = this.db.collection('clocks').valueChanges();
      console.log(this.product);
    } else if (category === 'Electronics') {
      // this.product = this.dataService.getProduct();
      this.product = this.db.collection('electronics').valueChanges(); // reading data from data base
      console.log(this.product);
    } else if (category === 'Gadjets') {
      // this.product = this.dataService.getProduct();
      this.product = this.db.collection('gadjets').valueChanges();
      console.log(this.product);
    }
  }
}

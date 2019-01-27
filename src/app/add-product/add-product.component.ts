import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';
import {
  AngularFirestoreCollection,
  AngularFirestore
} from '@angular/fire/firestore';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  private clocksCollection: AngularFirestoreCollection<any>;
  private electronicsCollection: AngularFirestoreCollection<any>;
  constructor(public dataService: DataService, public afs: AngularFirestore) {
    this.clocksCollection = afs.collection<any>('clocks');
    this.electronicsCollection = afs.collection<any>('electronics');
  }

  ngOnInit() {}

  onSubmit(santhosh: NgForm) {
    //  console.log(santhosh.value.category);
    const category = santhosh.value.category;
    console.log(category);
    // construct json object
    const product: Product = {
      productName: santhosh.value.productName,
      price: santhosh.value.price
    };
    // this.dataService.addProduct(product);
    if (category === 'clocks') {
      this.dataService.addProducttoDB(product);
      this.clocksCollection.add(product);
    } else if (category.toLowerCase() === 'Electronics'.toLowerCase()) {
      this.dataService.addProducttoDB(product);
      this.electronicsCollection.add(product);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';
// import {
// AngularFirestoreCollection,
// AngularFirestore
// } from '@angular/fire/firestore';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  // private productCollection: AngularFirestoreCollection<any>;
  constructor(public dataService: DataService) {
    // this.productCollection = afs.collection<any>('product');
  }

  ngOnInit() {}
  onSubmit(santhosh: NgForm) {
    console.log(santhosh.value.category);
    // construct json object
    const product: Product = {
      productName: santhosh.value.productName,
      price: santhosh.value.price
    };
    this.dataService.addProduct(product);
    // this.productCollection.add(product);
  }
}

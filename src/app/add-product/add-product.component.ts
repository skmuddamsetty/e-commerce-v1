import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  constructor(public datasevice: DataService) {}

  ngOnInit() {}
  onSubmit(santhosh: NgForm) {
    console.log(santhosh.value.productName);
    // construct json object
    const product = {
      productName: santhosh.value.productName,
      price: santhosh.value.price
    };
  }
}

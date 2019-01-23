import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  product = [];
  constructor(public dataService: DataService) {
    this.product = this.dataService.getProduct();
    console.log(this.product);
  }

  ngOnInit() {}
}

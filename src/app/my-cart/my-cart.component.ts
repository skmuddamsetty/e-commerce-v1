import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {
  products = [];
  constructor(public dataService: DataService) {
    this.products = this.dataService.getMyCart();
  }

  ngOnInit() {}
}

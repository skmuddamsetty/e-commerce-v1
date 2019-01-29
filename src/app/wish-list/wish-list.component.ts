import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  products = [];
  constructor(public dataService: DataService) {
    this.products = this.dataService.getWishList();
  }

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentNumberofItemInCart = 0;
  currentNumberofItemInWishList = 0;
  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.dataService.getNumberOfItemsInCart().subscribe(numberOfItemsInCart => {
      this.currentNumberofItemInCart = numberOfItemsInCart;
    });
    this.dataService
      .getNumberOfItemsInWishList()
      .subscribe(numberOfItemsInWishList => {
        this.currentNumberofItemInWishList = numberOfItemsInWishList;
      });
  }
}

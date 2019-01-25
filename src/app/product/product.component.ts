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
  constructor() {}

  ngOnInit() {}
}

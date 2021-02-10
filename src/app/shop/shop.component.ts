import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products = [];

  constructor(private prods:ProductService) { }

  ngOnInit(): void {
    this.products = this.prods.getProductsList();
  }

}

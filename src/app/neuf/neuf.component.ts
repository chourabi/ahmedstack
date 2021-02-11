import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-neuf',
  templateUrl: './neuf.component.html',
  styleUrls: ['./neuf.component.css']
})
export class NeufComponent implements OnInit {

  products = [];

  constructor(private prods:ProductService) { }

  ngOnInit(): void {
    this.products = this.prods.getProductsList();
  }

}

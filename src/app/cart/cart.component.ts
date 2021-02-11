import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  shoppingCart = [];
  total = 0;

  fn = ()=>{
    console.log("i'm an arrow function");
    
  }

  constructor( private cart:CartService ) { }

  ngOnInit(): void {
    this.shoppingCart=this.cart.getShoppingList();


    // calcul total

    this.shoppingCart.map((p)=>{
      this.total+= parseInt(p.price) ;
    })

    this.fn();

  }

}

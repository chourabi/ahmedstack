import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private shoppingCart = [];

  constructor() { }


  addToCart(produit){
    this.shoppingCart.push(produit);
  }


  getShoppingList(){
    return this.shoppingCart;
  }


}

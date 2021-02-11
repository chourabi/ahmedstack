import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  @Input() title;
  @Input() price;
  @Input() imgURL;
  

  constructor(private cart:CartService) { }

  ngOnInit(): void {
    console.log(this.title);
    
  }


  buyNow(){
    const produit = {
      title:this.title,
      price: this.price,
      imgURL:this.imgURL
    }
    this.cart.addToCart(produit);

    console.log(this.cart.getShoppingList);
    
    //alert("product addedd successfully to cart");
    
  }

}

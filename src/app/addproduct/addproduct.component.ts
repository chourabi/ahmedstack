import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  addProduct = new FormGroup({
    titre : new FormControl('',Validators.email),
    price: new FormControl('',Validators.required),
    client : new FormGroup({
      phone:  new FormControl('',Validators.required),
      address : new FormControl('',Validators.required),
    })    
  })
  constructor(private prods:ProductService,private router:Router) { }

  ngOnInit(): void {
  }

  addProduit(){
    /*const produit = {
      title:this.addProduct.value.titre,
      price:this.addProduct.value.price,
      imgURL:"https://tesla-cdn.thron.com/delivery/public/image/tesla/c82315a6-ac99-464a-a753-c26bc0fb647d/bvlatuR/std/1200x628/lhd-model-3-social"

    }

    this.prods.addNewProduct(produit);

    // redirection
    this.router.navigate(['/shop']);*/

    console.log(this.addProduct.value);
    

    
  }

}

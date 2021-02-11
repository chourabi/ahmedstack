import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
}) 
export class ProductService {

  private products = [
    {
      title:"first title",
      price:350,
      imgURL:"https://tesla-cdn.thron.com/delivery/public/image/tesla/c82315a6-ac99-464a-a753-c26bc0fb647d/bvlatuR/std/1200x628/lhd-model-3-social"
    },

    {
      title:"first title",
      price:400,
      imgURL:"https://tesla-cdn.thron.com/delivery/public/image/tesla/c82315a6-ac99-464a-a753-c26bc0fb647d/bvlatuR/std/1200x628/lhd-model-3-social"
    },

    {
      title:"first title",
      price:600,
      imgURL:"https://tesla-cdn.thron.com/delivery/public/image/tesla/c82315a6-ac99-464a-a753-c26bc0fb647d/bvlatuR/std/1200x628/lhd-model-3-social"
    },

    {
      title:"first title",
      price:8000,
      imgURL:"https://tesla-cdn.thron.com/delivery/public/image/tesla/c82315a6-ac99-464a-a753-c26bc0fb647d/bvlatuR/std/1200x628/lhd-model-3-social"
    },

    
    
  ]

  constructor() { }



  getProductsList(){
    return this.products;
  }



  addNewProduct(p){
    this.products.push(p);
  }

}



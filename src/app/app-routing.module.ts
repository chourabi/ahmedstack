import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { CartComponent } from './cart/cart.component';
import { DetailsproduitComponent } from './detailsproduit/detailsproduit.component';
import { NeufComponent } from './neuf/neuf.component';
import { OccassionComponent } from './occassion/occassion.component';
import { ShopComponent } from './shop/shop.component';


const routes: Routes = [
  { path:'' , component:ShopComponent },


  { path:'shop' , component:ShopComponent ,children:[
    { path:'' , component:NeufComponent },
    { path:'neouf' , component:NeufComponent },
    { path:'occassion' , component:OccassionComponent  },
    
    
  ] },


  { path:'detail/:id' , component:DetailsproduitComponent },
  { path:'about' , component:AboutComponent },
  { path:'add' , component:AddproductComponent },
  { path:'cart' , component:CartComponent },
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

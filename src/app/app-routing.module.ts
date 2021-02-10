import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ShopComponent } from './shop/shop.component';


const routes: Routes = [
  { path:'' , component:ShopComponent },
  { path:'shop' , component:ShopComponent },
  { path:'about' , component:AboutComponent },
  { path:'add' , component:AddproductComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

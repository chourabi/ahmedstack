import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhonePipe } from './phone.pipe';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ProduitComponent } from './produit/produit.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { DetailsproduitComponent } from './detailsproduit/detailsproduit.component';
import { OccassionComponent } from './occassion/occassion.component';
import { NeufComponent } from './neuf/neuf.component';

@NgModule({
  declarations: [
    AppComponent,
    PhonePipe,
    SidemenuComponent,
    ProduitComponent,
    ShopComponent,
    AboutComponent,
    NavbarComponent,
    AddproductComponent,
    CartComponent,
    DetailsproduitComponent,
    OccassionComponent,
    NeufComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

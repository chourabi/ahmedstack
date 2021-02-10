import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  


  menus = [
    {
      titre: "shop",
      icon :"fa-shopping-cart",
      url: '/shop'
    },
    {
      titre: "about",
      icon :"fa-question-circle",
      url : "/about"
    },
    {
      titre: "add new product",
      icon :"fa-plus",
      url : "/add"
    },
    
    
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  @Input() title;
  @Input() price;
  @Input() imgURL;
  

  constructor() { }

  ngOnInit(): void {
    console.log(this.title);
    
  }

}

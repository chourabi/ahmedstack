import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailsproduit',
  templateUrl: './detailsproduit.component.html',
  styleUrls: ['./detailsproduit.component.css']
})
export class DetailsproduitComponent implements OnInit {

  id;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route);
    this.id = this.route.snapshot.params.id;

    
    
  }

}

import { Component, OnInit } from '@angular/core';
import { Produit } from '../entities/produit';


@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent implements OnInit {

  list:Produit[] = [
    {id: 1,brand: 'Samsung',name:'S9',description:'true',price:600},
    {id: 2,brand: 'Apple',name:'iphone X' ,description:'true',price:1000},
    {id: 3,brand: 'Sony',name:'XPZ2' ,description:'true',price:600}

  ];

  constructor() { }

  ngOnInit() {
  }

}




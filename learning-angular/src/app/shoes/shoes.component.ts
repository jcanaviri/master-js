import { Component, OnInit } from '@angular/core';
import { Shoe } from '../models/shoe';

@Component({
  selector: 'shoes',
  templateUrl: './shoes.component.html',
})
export class ShoesComponent implements OnInit {
  public title: string = 'Shoes Component';
  public shoes: Array<Shoe> = [];

  constructor() {
    this.shoes = [
      new Shoe('Nike Airmax', 700, 'Violeta', true),
      new Shoe('Reebook Classic', 500, 'Blancas', true),
      new Shoe('Nike Runner', 400, 'Negras', true),
      new Shoe('Adidas Yezzy', 600, 'Purpura', false),
    ];
  }

  ngOnInit() {
    console.table(this.shoes);
  }
}

import { Component, OnInit } from '@angular/core';
import { Shoe } from '../models/shoe';

@Component({
  selector: 'shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css'],
})
export class ShoesComponent implements OnInit {
  public title: string = 'Shoes Component';
  public shoes: Array<Shoe> = [];
  public names: string[] = [];
  public color: string;

  constructor() {
    this.color = 'blue';
    this.shoes = [
      new Shoe('Nike Airmax', 400, 'Violeta', true),
      new Shoe('Reebook Classic', 500, 'Blancas', false),
      new Shoe('Nike Runner', 300, 'Negras', true),
      new Shoe('Adidas Yezzy', 900, 'Purpura', true),
    ];
  }

  ngOnInit() {
    this.getNames();
  }

  getNames() {
    this.shoes.forEach((shoe) => {
      if (!this.names.includes(shoe.name)) {
        this.names.push(shoe.name);
      }
    });
  }
}

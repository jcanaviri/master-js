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
  public miMarca: string;

  constructor() {
    this.miMarca = '';
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

  getMarca() {
    alert(this.miMarca);
  }

  addMarca() {
    this.names.push(this.miMarca);
  }

  deleteMarca(i: number) {
    this.names.splice(i, 1);
  }

  onBlur() {
    console.log('Has salido del input');
  }

  getWord() {
    alert(this.miMarca);
  }
}

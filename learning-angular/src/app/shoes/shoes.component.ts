import { Component, OnInit } from '@angular/core';

import { Shoe } from '../models/shoe';
import { ShoeService } from '../services/shoes.service';

@Component({
  selector: 'shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css'],
  providers: [ShoeService],
})
export class ShoesComponent implements OnInit {
  public title: string = 'Shoes Component';
  public names: string[] = [];
  public color: string;
  public miMarca: string;
  public shoes: Array<Shoe>;

  constructor(
    private _shoesService: ShoeService,
  ) {
    this.miMarca = '';
    this.color = 'blue';
    this.shoes = this._shoesService.getShoes();
  }

  ngOnInit() {
    this.getNames();
    console.log(this._shoesService.getText());
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

import { Injectable } from '@angular/core';
import { Shoe } from '../models/shoe';

@Injectable()
export class ShoeService {

  public shoes: Array<Shoe>;

  constructor() {
    this.shoes = [
        new Shoe('Nike Airmax', 400, 'Violeta', true),
        new Shoe('Reebook Classic', 500, 'Blancas', false),
        new Shoe('Nike Runner', 300, 'Negras', true),
        new Shoe('Adidas Yezzy', 900, 'Purpura', true),
      ];
  }

  getShoes(): Array<Shoe> {
    return this.shoes;
  }

  getText() {
    return 'Hello World, from a service'
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'video-game',
  template: `
    <h3>video-game component</h3>
    <ul>
      <li>item-1</li>
      <li>item-2</li>
      <li>item-3</li>
      <li>item-4</li>
    </ul>
  `,
})
export class VideoGameComponent {
  constructor() {
    console.log('Component vide-game works!')
  }
}

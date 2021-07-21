import { Component } from '@angular/core';

@Component({
  selector: 'video-game',
  templateUrl: './video-game.component.html',
})
export class VideoGameComponent {
  public title: string;
  public paragraph: string;
  constructor() {
    this.title = 'Video Game Component'
    this.paragraph = 'This is my favorite list'
  }
}

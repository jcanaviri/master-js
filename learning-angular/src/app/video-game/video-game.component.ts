import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'video-game',
  templateUrl: './video-game.component.html',
})
export class VideoGameComponent implements OnInit, DoCheck, OnDestroy {
  public title: string;
  public paragraph: string;
  
  constructor() {
    this.title = 'Video Game Component';
    this.paragraph = 'This is my favorite list';
  }

  // Runs when the component starts
  ngOnInit() {
    console.log('ngOnInit executed 😀');
  }

  // When there is a change in the component
  ngDoCheck() {
    console.log('ngDoCheck executed 🤗');
  }

  // When a component is destroyed
  ngOnDestroy() {
    console.log('ngOnDestroy executed 😈');
  }

  changeTitle() {
    this.title = 'New title'
  }
}

import { Component } from '@angular/core';

import { Config } from './models/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string;
  public description: string;
  public showGames: boolean = true;
  public config;

  constructor() {
    this.config = Config;
    this.title = Config.title;
    this.description = Config.descr;
  }

  hideGames(value: boolean): void {
    this.showGames = value;
  }
}

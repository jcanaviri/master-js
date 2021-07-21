import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'master-js';
  public showGames: boolean = true;

  hideGames(value: boolean): void {
    this.showGames = value;
  }
}

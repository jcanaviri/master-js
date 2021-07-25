import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public auth: boolean;

  constructor() { 
    this.auth = false;
  }

  ngOnInit(): void {
  }

  setAuth(value: boolean) {
    this.auth = value;
  }
}

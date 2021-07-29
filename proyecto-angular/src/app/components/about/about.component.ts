import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public email: string;
  
  constructor() { 
    this.title = "Josue Canaviri";
    this.subtitle = "Desarrollador Web";
    this.email = "jcanaviri20@gmail.com";
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/requests.service';

@Component({
  selector: 'app-extern',
  templateUrl: './extern.component.html',
  styleUrls: ['./extern.component.css'],
  providers: [RequestService],
})
export class ExternComponent implements OnInit {

  public user: any;
  public userId: number;
  public currentDate: any;

  constructor(
    private _requestService: RequestService,
  ) { 
    this.userId = 1;
  }

  ngOnInit(): void {
    this.currentDate = new Date(1997, 11, 2);
    this.loadUser();
  }

  loadUser() {
    this.user = false;
    this._requestService.getUser(this.userId).subscribe(
      result => {
        this.user = result;
      },
      error => {
        console.log('Error');
      }
    )
  }
}

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

  constructor(
    private _requestService: RequestService,
  ) { 
    this.userId = 1;
  }

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser() {
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

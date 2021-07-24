import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  public name: string = '';
  public followers: number = 0;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.name = params.username;
      this.followers = +params.followers;
    })
  }

  redirectToShoes() {
    this._router.navigate(['/shoes']);
  }
}

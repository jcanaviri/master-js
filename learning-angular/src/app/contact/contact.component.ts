import { Component, OnInit } from '@angular/core';

import { User } from '../models/user';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  public user: User;

  constructor() {
    this.user = new User('', '', '');
  }

  ngOnInit(): void {}

  onSubmit(form: any): void {
    console.table(this.user);
    form.reset();
  }
}

import { Component, OnInit } from '@angular/core';
import {UsersService} from './users.service';
import {User} from './user';

@Component({
  selector: 'ids-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public user: User;

  constructor(public usersService: UsersService) {
    this.user = this.usersService.user;
  }

  ngOnInit() {
  }

}

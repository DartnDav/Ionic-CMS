import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UsersService } from './../users.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage {

  users: User;

  constructor(
    private router: Router,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.usersService.getUsers().subscribe(
      (response: any) => {
        this.users = response.users;
      }
    );
  }

}
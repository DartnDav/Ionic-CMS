import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.page.html',
  styleUrls: ['./user-edit.page.scss']
})

export class UserEditPage {
  user: User;
  errors: any = {};

  constructor(
    private usersService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ionViewWillEnter() {
    {
      this.activatedRoute.params.subscribe((params) => {
        this.getUser(params['id']);
      });
    }
  }

  response(response): void {

    if (response.success == false) {

      if (response.error.errors.name == 'MissingUsernameError') {
        this.errors.username = 'Please enter a username';
      }

      if (response.error.errors.name == 'UserExistsError') {
        this.errors.username = 'A user with the given username is already registered';
      }

      if (response.error.errors.email) {
        this.errors.email = response.error.errors.email.message;
      }

    }

    if (response.success === true) {
      this.router.navigate(['/user', response.user._id]);
    }
  }

  onSubmit(): void {
    this.usersService.editUser(this.user).subscribe(
      (response) => {
        this.response(response);
      }
    );
  }

  getUser(id: string): void {
    this.usersService.getUser(id).subscribe(
      (response: any) => {
        console.log(this.user)
        this.user = response.user;
      }
    );
  }

}
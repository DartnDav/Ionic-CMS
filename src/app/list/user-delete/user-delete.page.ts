import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.page.html',
  styleUrls: ['./user-delete.page.scss'],
})
export class UserDeletePage {

  user: User;
  errors: any = {};

  constructor(
    private usersService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    {
      this.activatedRoute.params.subscribe((params) => {
        this.getUser(params['id']);
      });
    }

  }

  deleteUser(id: string): void {
    this.usersService.deleteUser(id).subscribe(
      (response: any) => {
        if (response.success == true) {
          this.router.navigate(['/users']);
        }
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

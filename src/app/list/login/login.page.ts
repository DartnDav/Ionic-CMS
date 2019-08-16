import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User = new User();
  errorMessage: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() { }

  response(response): void {
    if (response.success === false) {
      this.errorMessage = 'Invalid Credentials';
    }

    if (response.success === true) {
      window.location.href = '/';
    }
  }

  onSubmit(): void {
    this.authService.logIn(this.user).subscribe(
      (response) => {
        this.response(response);
      }
    );
  }

}
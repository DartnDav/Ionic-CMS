import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  cookieExists: boolean;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Users',
      url: '/users',
      icon: 'people'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'log-in'
    },
    {
      title: 'Register',
      url: '/register',
      icon: 'person-add'
    },
    {
      title: 'Logout',
      url: '/logout',
      icon: 'log-out'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private cookieService: CookieService
  ) {
    this.initializeApp();
    this.cookieExists = this.cookieService.check('sugar');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
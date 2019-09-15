import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    // {
    //   title: 'Home',
    //   url: '/home',
    //   icon: 'home'
    // },
    {
      title: 'Courses',
      url: '/courses',
      icon: 'rose'
    },
    {
      title: 'Game List',
      url: '/list',
      icon: 'ribbon'
    },
    {
      title: 'Login',
      url: '/user',
      icon: 'ios-people'
    },
    // {
    //   title: 'Find a Tournament',
    //   url: '/tournaments',
    //   icon: 'ribbon'
    // }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public authService: AuthService
  ) {
    this.authService.accountLogin();
    this.initializeApp();
  }

  initializeApp() {
    // this.authService.accountLogin();
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

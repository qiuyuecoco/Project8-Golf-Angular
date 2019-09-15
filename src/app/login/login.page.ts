import { Component, OnInit } from '@angular/core';
import {LoadingController} from '@ionic/angular';
import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
      private loader: LoadingController,
      private acctService: AuthService

  ) { }

  async ngOnInit() {
    const loading = await this.loader.create({
      message: 'logging in...'
    });
    loading.present().then(() => {
      this.acctService.isLoggedIn();
      loading.dismiss();
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  constructor(
      private authService: AuthService
  ) { }

  ngOnInit() {
  }

}

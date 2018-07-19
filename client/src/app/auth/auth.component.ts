import {Component, OnInit} from '@angular/core';
import {AppRoutes} from '../app.component';

export class AuthRoutes {
  static LOGIN = [AppRoutes.AUTH, 'login'];
  static REGISTER = [AppRoutes.AUTH, 'register'];
  static TEST = [AppRoutes.AUTH, 'test'];
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

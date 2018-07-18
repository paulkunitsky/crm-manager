import {Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/services/auth.service';
import {MainRoutes} from '../shared/constants';

@Component({
  selector: 'app-overview',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  links = [
    {path: MainRoutes.OVERVIEW, text: 'Обзор'},
    {path: MainRoutes.ANALYTICS, text: 'Аналитика'},
    {path: MainRoutes.HISTORY, text: 'История'},
    {path: MainRoutes.ORDER, text: 'Добавить заказ'},
    {path: MainRoutes.CATEGORIES, text: 'Ассортимент'},
  ];

  constructor(public authService: AuthService) {
  }

  ngOnInit() {
  }
}

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../shared/services/auth.service';
import {MaterialService} from '../shared/services/material.service';
import {AppRoutes} from '../app.component';

export class MainRoutes {
  static OVERVIEW = [AppRoutes.MAIN, 'overview'];
  static ANALYTICS = [AppRoutes.MAIN, 'analytics'];
  static HISTORY = [AppRoutes.MAIN, 'history'];
  static ORDER = [AppRoutes.MAIN, 'order'];
  static CATEGORIES = [AppRoutes.MAIN, 'categories'];
}

@Component({
  selector: 'app-overview',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild('floatingButton') floatingButtonRef: ElementRef;

  MainRoutes = MainRoutes;

  links = [
    {path: MainRoutes.OVERVIEW, text: 'Обзор'},
    {path: MainRoutes.ANALYTICS, text: 'Аналитика'},
    {path: MainRoutes.HISTORY, text: 'История'},
    {path: MainRoutes.ORDER, text: 'Добавить заказ'},
    {path: MainRoutes.CATEGORIES, text: 'Ассортимент'},
  ];

  constructor(
    public authService: AuthService,
    private material: MaterialService
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.material.initFloatingButton(this.floatingButtonRef);
  }

}

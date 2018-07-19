import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../shared/services/auth.service';
import {MaterialService} from '../shared/services/material.service';

@Component({
  selector: 'app-overview',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild('floatingButton') floatingButtonRef: ElementRef;

  links = [
    {path: '/main/overview', text: 'Обзор'},
    {path: '/main/analytics', text: 'Аналитика'},
    {path: '/main/history', text: 'История'},
    {path: '/main/order', text: 'Добавить заказ'},
    {path: '/main/categories', text: 'Ассортимент'},
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

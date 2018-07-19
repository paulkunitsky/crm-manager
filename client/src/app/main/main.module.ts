import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main.component';
import {OverviewComponent} from './overview/overview.component';
import {AnalyticsComponent} from './analytics/analytics.component';
import {HistoryComponent} from './history/history.component';
import {OrderComponent} from './order/order.component';
import {CategoriesComponent} from './categories/categories.component';
import {LoadingModule} from '../shared/modules/loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    LoadingModule
  ],
  declarations: [
    MainComponent,
    OverviewComponent,
    AnalyticsComponent,
    HistoryComponent,
    OrderComponent,
    CategoriesComponent
  ]
})
export class MainModule {
}

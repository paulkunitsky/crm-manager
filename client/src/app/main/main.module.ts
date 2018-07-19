import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main.component';
import {OverviewComponent} from './overview/overview.component';
import {AnalyticsComponent} from './analytics/analytics.component';
import {HistoryComponent} from './history/history.component';
import {OrderComponent} from './order/order.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
  ],
  declarations: [
    MainComponent,
    OverviewComponent,
    AnalyticsComponent,
    HistoryComponent,
    OrderComponent,
  ]
})
export class MainModule {
}

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main.component';
import {OverviewComponent} from './overview/overview.component';
import {AnalyticsComponent} from './analytics/analytics.component';
import {HistoryComponent} from './history/history.component';
import {OrderComponent} from './order/order.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {path: '', redirectTo: 'overview'},
      {path: 'overview', component: OverviewComponent},
      {path: 'analytics', component: AnalyticsComponent},
      {path: 'history', component: HistoryComponent},
      {path: 'order', component: OrderComponent},
      {path: 'categories', loadChildren: './categories/categories.module#CategoriesModule'}
    ]
  },
  {path: '**', redirectTo: 'overview'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}

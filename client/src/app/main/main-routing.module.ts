import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main.component';
import {OverviewComponent} from './overview/overview.component';
import {MainRoutes} from '../shared/constants';
import {AnalyticsComponent} from './analytics/analytics.component';
import {HistoryComponent} from './history/history.component';
import {OrderComponent} from './order/order.component';
import {CategoriesComponent} from './categories/categories.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {path: '', redirectTo: MainRoutes.OVERVIEW},
      {path: MainRoutes.OVERVIEW, component: OverviewComponent},
      {path: MainRoutes.ANALYTICS, component: AnalyticsComponent},
      {path: MainRoutes.HISTORY, component: HistoryComponent},
      {path: MainRoutes.ORDER, component: OrderComponent},
      {path: MainRoutes.CATEGORIES, component: CategoriesComponent}
    ]
  },
  {path: '**', redirectTo: MainRoutes.OVERVIEW}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}

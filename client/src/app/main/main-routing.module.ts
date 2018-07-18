import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main.component';
import {OverviewComponent} from './overview/overview.component';
import {MainRoutes} from '../shared/constants';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {path: '', redirectTo: MainRoutes.OVERVIEW},
      {path: MainRoutes.OVERVIEW, component: OverviewComponent}
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

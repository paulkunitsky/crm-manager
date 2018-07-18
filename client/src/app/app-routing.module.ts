import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Routes} from '@angular/router';
import {AuthGuardService} from './shared/services/auth-guard.service';

export enum AppRoutes {
  AUTH = 'auth',
  OVERVIEW ='overview'
}

const routes: Routes = [
  {path: AppRoutes.AUTH, loadChildren: './auth/auth.module#AuthModule'},
  {path: AppRoutes.OVERVIEW, loadChildren: './overview/overview.module#OverviewModule', canActivate: [AuthGuardService]},
  {path: '**', redirectTo: 'auth'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
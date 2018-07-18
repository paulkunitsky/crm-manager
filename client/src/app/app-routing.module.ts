import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Routes} from '@angular/router';

export enum AppRoutes {
  AUTH = 'auth',
  OVERVIEW ='overview'
}

const routes: Routes = [
  {path: AppRoutes.AUTH, loadChildren: './auth/auth.module#AuthModule'},
  {path: '**', redirectTo: 'auth'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Routes} from '@angular/router';
import {AuthGuardService} from './shared/services/auth-guard.service';
import {AppRoutes} from './app.component';

const routes: Routes = [
  {path: AppRoutes.AUTH, loadChildren: './auth/auth.module#AuthModule'},
  {path: AppRoutes.MAIN, loadChildren: './main/main.module#MainModule', canActivate: [AuthGuardService]},
  {path: '**', redirectTo: 'auth'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
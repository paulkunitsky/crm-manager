import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Routes} from './shared/constants';

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
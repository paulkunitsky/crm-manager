import {Routes} from '@angular/router';

export const Routes: Routes = [
  {path: '', loadChildren: '../auth/auth.module#AuthModule'}
];
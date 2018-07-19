import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {AuthRoutes} from '../constants';
import {AppRoutes} from '../../app.component';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(
    private service: AuthService,
    private router: Router
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.service.isAuthorized()) {
      return true;
    } else {
      this.router.navigate([AppRoutes.AUTH, AuthRoutes.LOGIN], {queryParams: {accessDenied: true}});
      return false;
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }
}
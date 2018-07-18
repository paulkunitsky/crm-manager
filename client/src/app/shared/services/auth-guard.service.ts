import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {AppRoutes, AuthRoutes} from '../constants';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(
    private service: AuthService,
    private router: Router
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if (this.service.isAuthorized()) {
      return Observable.of(true);
    } else {
      this.router.navigate([AppRoutes.AUTH, AuthRoutes.LOGIN], {queryParams: {accessDenied: true}});
      return Observable.of(false);
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(route, state);
  }

}
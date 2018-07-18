import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AppRoutes, AuthRoutes} from '../../constants';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private service: AuthService,
    private router: Router,
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.service.isAuthorized()) {
      req = req.clone({setHeaders: {'Authorization': this.service.getToken()}});
    }
    return next.handle(req).pipe(
      catchError(this.handleAuthError)
    );
  }

  private handleAuthError(error: HttpErrorResponse): Observable<any> {
    if (error.status === 401) {
      this.router.navigate([AppRoutes.AUTH, AuthRoutes.LOGIN], {queryParams: {sessionFailed: true}});
    }
    return Observable.throw(error);
  }

}
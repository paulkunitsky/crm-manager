import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import {MaterialService} from '../../services/material.service';
import {Router} from '@angular/router';
import {AuthRoutes} from '../../constants';
import {of} from 'rxjs/internal/observable/of';
import {AppRoutes} from '../../../app.component';

@Injectable()
export class InterceptErrorsService implements HttpInterceptor {

  constructor(private material: MaterialService, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(req).pipe(
      catchError(error => {
        if (error.status === 401) {
          this.router.navigate([AppRoutes.AUTH, AuthRoutes.LOGIN], {queryParams: {sessionFailed: true}});
        }
        this.material.toast(error.error.message);
        return of(error.error.message);
      })
    );
  }

}
import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import {MaterialService} from '../../services/material.service';
import {Router} from '@angular/router';
import {of} from 'rxjs/internal/observable/of';
import {throwError} from 'rxjs/internal/observable/throwError';

@Injectable()
export class InterceptErrorService implements HttpInterceptor {

  constructor(private material: MaterialService, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(req).pipe(
      catchError(error => {
        if (error && error.error && error.error.message) {
          this.material.toast(error.error.message);
        }
        return throwError(error.error.message);
      })
    );
  }

}
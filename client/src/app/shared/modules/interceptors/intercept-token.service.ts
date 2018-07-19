import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

@Injectable()
export class InterceptTokenService implements HttpInterceptor {

  constructor(
    private service: AuthService,
    private router: Router,
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.service.isAuthorized()) {
      req = req.clone({setHeaders: {'Authorization': this.service.getToken()}});
    }
    return next.handle(req);
  }
}
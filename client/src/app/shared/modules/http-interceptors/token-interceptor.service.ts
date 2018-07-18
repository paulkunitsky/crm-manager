import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private service: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.service.isAuthorized()) {
      req = req.clone({
        setHeaders: {
          'Authorization': this.service.getToken()
        }
      });
    }
    return next.handle(req);
  }
}
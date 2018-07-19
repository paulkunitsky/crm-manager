import {Injectable} from '@angular/core';
import {User} from '../models';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import {tap} from 'rxjs/operators';
import {LocalStorageService} from './local-storage.service';
import {Router} from '@angular/router';
import {AppRoutes} from '../../app.component';
import {AuthRoutes} from '../../auth/auth.component';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private ls: LocalStorageService,
    private router: Router
  ) {}

  login(user: User): Observable<any> {
    return this.http
      .post('/api/auth/login', user)
      .pipe(
        tap((res: any) => {
          this.ls.setItem(this.ls.keys.TOKEN, res.token);
        })
      )
  }

  register(user: User): Observable<any> {
    return this.http
      .post('/api/auth/register', user)
  }

  getToken(): string|null {
    return this.ls.getItem(this.ls.keys.TOKEN, null);
  }

  isAuthorized(): boolean {
    return !!this.getToken();
  }

  logout(): Promise<any> {
    this.ls.setItem(this.ls.keys.TOKEN, null);
    return this.router.navigate([AuthRoutes.LOGIN]);
  }

}
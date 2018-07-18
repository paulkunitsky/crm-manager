import {Injectable} from '@angular/core';
import {User} from '../models';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import {tap} from 'rxjs/operators';
import {LocalStorageService} from './local-storage.service';

function handleError(err) {
  return Observable.throw(err.error.message);
}

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private ls: LocalStorageService,
  ) {}

  login(user: User): Observable<any> {
    return this.http
      .post('/api/auth/login', user)
      .pipe(
        tap((res: any) => {
          this.setToken(res.token);
        })
      )
      .catch(handleError);
  }

  register(user: User): Observable<any> {
    return this.http
      .post('/api/auth/register', user)
      .catch(handleError);
  }

  setToken(token): void {
    this.ls.setItem(this.ls.keys.TOKEN, token);
  }

  getToken(): string|null {
    return this.ls.getItem(this.ls.keys.TOKEN, null);
  }

  isAuthorized(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    this.ls.setItem(this.ls.keys.TOKEN, null);
  }

}
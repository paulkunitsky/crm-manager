import {Injectable} from '@angular/core';
import {User} from '../shared/models';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient
  ) {
  }

  login(user: User): Observable<any> {
    return this.http.post('/api/auth/login', user);
  }

  register() {

  }

}
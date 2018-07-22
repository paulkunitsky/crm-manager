import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Position} from '../models';

@Injectable()
export class PositionsService {
  constructor(private http: HttpClient) {
  }

  getAllByCategoryId(categoryId: string): Observable<any> {
    return this.http.get(`/api/position/${categoryId}`);
  }

  deleteOne(position: Position): Observable<any> {
    return this.http.delete(`/api/position/${position._id}`);
  }

  postOne(position: Position): Observable<any> {
    return this.http.post(`/api/position`, position);
  }

  updateOne(position: Position): Observable<any> {
    return this.http.patch(`/api/position/${position._id}`, position);
  }
}
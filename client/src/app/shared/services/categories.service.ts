import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CategoriesService {
  constructor(
    private http: HttpClient
  ) {
  }

  getAll(): Observable<any> {
    return this.http.get('/api/category');
  }

  getOneById(id: number): Observable<any> {
    return this.http.get(`/api/category/${id}`);
  }

  postOne(name: string, image?: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image, image.name);
    formData.append('name', name);
    return this.http.post('/api/category', formData);
  }

  update(id: string, name: string, image?: File): Observable<any> {
    const formData = new FormData();
    if (image) formData.append('image', image, image.name);
    formData.append('name', name);
    formData.append('id', id);
    return this.http.patch('/api/category/' + id, formData);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`/api/category/${id}`);
  }
}
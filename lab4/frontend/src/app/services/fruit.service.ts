import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fruit } from '../models/fruit.model';

const baseUrl = 'http://localhost:8080/api/fruits';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Fruit[]> {
    return this.http.get<Fruit[]>(baseUrl);
  }

  get(id: any): Observable<Fruit> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(fruitNaming: any): Observable<Fruit[]> {
    return this.http.get<Fruit[]>(`${baseUrl}?full_name=${fruitNaming}`);
  }
}

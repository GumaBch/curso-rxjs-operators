import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, zip } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsersForkJoin(): Observable<any> {
    const http$ = forkJoin({
      apiLocal: this.http.get('http://localhost:3000/users'),
      apiExterna: this.http.get('http://jsonplaceholder.typicode.com/todos/1')
    });

    return http$;
  }

  getUsersZip(): Observable<any> {
    const apiLocal$ = this.http.get('http://localhost:3000/users');
    const apiExterna$ = this.http.get('http://jsonplaceholder.typicode.com/todos?_start=0&_limit=5');

    const result$ = zip(apiLocal$, apiExterna$);

    return result$;
  }
}

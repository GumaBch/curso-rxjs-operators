import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concat, forkJoin, interval, map, merge, zip } from 'rxjs';

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

  getUsersMerge(): Observable<any> {
    const it$ = interval(1000);
    const apiLocal$ = this.http.get('http://localhost:3000/users');
    const apiExterna$ = this.http.get('http://jsonplaceholder.typicode.com/todos?_start=0&_limit=5');

    const result$ = merge(it$, apiLocal$, apiExterna$);

    return result$;
  }

  getUsersConcat(): Observable<any> {
    const it$ = interval(1000);
    const apiLocal$ = this.http.get('http://localhost:3000/users');
    const apiExterna$ = this.http.get('http://jsonplaceholder.typicode.com/todos?_start=0&_limit=5');

    const result$ = concat(it$, apiLocal$, apiExterna$);

    return result$;
  }

  getUsersHttp() {
    const http$ = this.http.get('http://jsonplaceholder.typicode.com/todos/1')
      .pipe(map((data: any) => data.title));

      return http$;
  }
}

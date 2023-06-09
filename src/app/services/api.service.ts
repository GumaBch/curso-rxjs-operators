import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, concat, delay, forkJoin, interval, map, merge, of, retry, share, shareReplay, throwError, timeout, toArray, zip } from 'rxjs';

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

  getUsersHttpSwitchMap() {
    return this.http.get('http://localhost:3000/user');
  }

  getUsersHttpSwitchMapSearch(cpf: string) {
    return this.http.get(`http://localhost:3000/users?cpf=${cpf}`);
  }

  getUserToArray() {
    return this.http.get('http://localhost:3000/user')
      .pipe(
        toArray()
      );
  }

  getUsersDebounceTime(name: string) {
    return this.http.get(`http://localhost:3000/users?name=${name}`);
  }

  getUsersShareReplay() {
    return this.http.get(`http://localhost:3000/users`)
      .pipe(
        shareReplay(1)
      );
  }

  getUsersShare() {
    return this.http.get(`http://localhost:3000/users`)
      .pipe(
        share()
      );
  }

  getUserCatchError() {
    return this.http.get(`http://localhost:3000/uses`)
    .pipe(
      catchError(error => {
        if(error.status === 0 && error.status !== 404) {
          return of('Ocorreu um erro na aplicação, tente novamente mais tarde.')
        } else if(error.status === 404) {
          console.log(error.message)
        } else {
          return of('Ocorreu um erro no servidor, tente novamente mais tarde.')
        }

        return throwError(() => error);
      }),
      retry(2)
    );
  }

  getUsersDelay() {
    return this.http.get(`http://localhost:3000/users`)
      .pipe(
        delay(5000)
      );
  }

  getUsersTimeout() {
    return this.http.get(`http://localhost:3000/users`)
      .pipe(
        delay(5000),
        timeout(2500),
        catchError(error => of('Ocorreu um erro: ', error))
      );
  }
}

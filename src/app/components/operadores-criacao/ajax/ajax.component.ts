import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent implements OnInit {

  users: User[] = [];

  ngOnInit(): void {
    this.operatorAjax();
  }

  operatorAjax() {
    const http$ = ajax.getJSON('http://localhost:3000/users')
      .pipe(
        catchError(error => {
          console.error(error);
          return of(error);
        })
      );

    http$.subscribe(res => {
      this.users = res;
      console.log(res)
    });
  }

}

export interface User {
  id: number;
  name: string;
  email: string;
}

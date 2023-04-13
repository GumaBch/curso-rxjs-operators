import { Component, OnInit } from '@angular/core';
import { forkJoin, of, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrls: ['./forkjoin.component.css']
})
export class ForkjoinComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.operatorForkJoin();
    this.getUsers();
  }

  operatorForkJoin() {
    const http$ = forkJoin({
      apiLocal: ajax.getJSON('http://localhost:3000/users'),
      apiExterna: ajax.getJSON('https://jsonplaceholder.typicode.com/todos')
    });

    const httpMulti$ = forkJoin({
      first: of(1, 2, 3),
      second: timer(1000)
    });

    // http$.subscribe(res => console.log(res));
    // httpMulti$.subscribe(res => console.log(res));
  }

  getUsers() {
    this.apiService.getUsersForkJoin().subscribe(res => console.log(res));
  }

}

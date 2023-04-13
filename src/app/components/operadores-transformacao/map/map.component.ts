import { Component, OnInit } from '@angular/core';
import { from, map } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.operatorMap();
  }

  operatorMap() {
    const arr$ = from([
      { name: 'Guma', age: 20 },
      { name: 'Leonardo', age: 18 },
      { name: 'Jão', age: 30 },
      { name: 'Amanda', age: 19 }
    ]);
    const arrMap = arr$.pipe(
      map(({name}) => name)
    )

    const nums$ = from([1, 2, 3, 4]);
    const numMap$ = nums$.pipe(map(val => val * 2));

    arrMap.subscribe(console.log);
    numMap$.subscribe(console.log);

    this.apiService.getUsersHttp().subscribe(console.log);
  }
}

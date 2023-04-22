import { Component, OnInit } from '@angular/core';
import { filter, from, interval, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  ngOnInit(): void {
    this.operatorFilter();
  }

  operatorFilter() {
    const arr = from([
      { name: 'Guma', age: 37 },
      { name: 'Larissa', age: 36 },
      { name: 'Agatha', age: 0 }
    ]);

    const names = arr.pipe(
      filter(value => value.age > 18)
    );
    names.subscribe(console.log);

    const toArr = names.pipe(toArray());
    toArr.subscribe(console.log);

    const it$ = interval(1000);
    const numberGreaterThan5 = it$.pipe(
      filter(value => value >= 5 && value < 20)
    );
    numberGreaterThan5.subscribe(console.log);
  }
}

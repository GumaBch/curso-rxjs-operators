import { Component, OnInit } from '@angular/core';
import { from, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {

  ngOnInit(): void {
    this.operatorTake();
  }

  operatorTake() {
    const arr = from([
      { name: 'Guma', age: 37 },
      { name: 'Larissa', age: 36 },
      { name: 'Agatha', age: 0 }
    ]);

    const names = arr.pipe(
      map(data => data.name),
      take(1)
    );
    names.subscribe(console.log);

    const it$ = interval(1000);
    const first5Values = it$.pipe(
      take(5)
    );
    first5Values.subscribe(console.log);
  }

}

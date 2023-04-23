import { Component, OnInit } from '@angular/core';
import { combineLatest, interval, of, take } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.css']
})
export class CombineLatestComponent implements OnInit {

  ngOnInit(): void {
    this.operatorCombineLatest()
  }

  operatorCombineLatest() {
    const obs1$ = interval(1000).pipe(take(4));
    const obs2$ = of(5, 6, 7, 8);
    const obs3$ = interval(1000).pipe(take(4));

    const combine = combineLatest([obs1$, obs2$, obs3$]);

    combine.subscribe(console.log);
  }
}

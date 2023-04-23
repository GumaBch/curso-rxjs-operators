import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, map, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-with-latest-from',
  templateUrl: './with-latest-from.component.html',
  styleUrls: ['./with-latest-from.component.css']
})
export class WithLatestFromComponent implements OnInit {

  ngOnInit(): void {
    this.operatorWithLatestFrom();
  }

  operatorWithLatestFrom() {
    const click = fromEvent(document, 'click');
    const timer$ = interval(1000);
    const result = click.pipe(
      map((event: any) => event.screenX),
      withLatestFrom(timer$)
    );

    result.subscribe(console.log);
  }
}

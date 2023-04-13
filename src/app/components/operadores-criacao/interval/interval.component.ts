import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  ngOnInit(): void {
    this.operatorInterval();
  }

  operatorInterval() {
    const number = interval(1000);

    const subscription = number.subscribe(res => console.log(res));

    setTimeout(() => {
      subscription.unsubscribe();
    }, 5000);
  }

}

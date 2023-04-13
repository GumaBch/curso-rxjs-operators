import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  ngOnInit(): void {
    this.initObservable();
  }

  initObservable() {
    const observable = new Observable((subscriber) => {
      subscriber.next(10);
      subscriber.next('Guma');
      subscriber.next(true);
      subscriber.next({name: 'Guma'});
      subscriber.complete();
    });

    const observer = {
      next: (x: any) => console.log('Observer next value ' + x),
      error: (err: any) => console.log('Observer error ' + err),
      complete: () => console.log('Observer complete!')
    };

    const subscription = observable.subscribe(observer);
    subscription.unsubscribe();

    const it = interval(1000);
    const subscription2 = it.subscribe(console.log);

    setTimeout(() => {
      subscription2.unsubscribe();
    }, 3000);
  }
}

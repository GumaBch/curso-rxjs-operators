import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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

    observable.subscribe(observer);
  }
}

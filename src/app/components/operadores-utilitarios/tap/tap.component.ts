import { Component, OnInit } from '@angular/core';
import { filter, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {

  ngOnInit(): void {
    this.operatorTap();
  }

  operatorTap() {
    const arr = of([
      { id: 1, name: 'Guma', age: 37 },
      { id: 2, name: 'Larissa', age: 36 },
      { id: 3, name: 'Agatha', age: 0 }
    ]);

    const subscription = arr.pipe(
      tap(val => console.log('Antes do map -->', val)),
      map((value: any) => value.filter((val: any) => val.name === 'Agatha')),
      tap(val => console.log('Depois do map -->', val))
    );

    subscription.subscribe();
  }
}

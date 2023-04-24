import { Component, OnInit } from '@angular/core';
import { every, of } from 'rxjs';

@Component({
  selector: 'app-every',
  templateUrl: './every.component.html',
  styleUrls: ['./every.component.css']
})
export class EveryComponent implements OnInit {

  ngOnInit(): void {
    this.operatorEvery();
  }

  operatorEvery() {
    const values = of(1, 2, 3, 4, 10);
    const equals = values.pipe(
      every(x => x < 5)
    );
    equals.subscribe(console.log);
  }
}

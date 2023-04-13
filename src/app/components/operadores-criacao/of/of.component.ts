import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.css']
})
export class OfComponent implements OnInit {

  ngOnInit(): void {
    this.operatorOf();
  }

  operatorOf() {
    const arr = of([1, 2, 3, 4, 5]);
    const string = of('Olá mundo!');
    const multiValue = of({name: 'Guma'}, true, function showName() {return 'Guma'});

    arr.subscribe(res => console.log(res));
    string.subscribe(res => console.log(res));
    multiValue.subscribe(res => console.log(res));
  }
}

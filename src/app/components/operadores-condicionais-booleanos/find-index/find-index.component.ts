import { Component, OnInit } from '@angular/core';
import { findIndex, of, tap } from 'rxjs';

@Component({
  selector: 'app-find-index',
  templateUrl: './find-index.component.html',
  styleUrls: ['./find-index.component.css']
})
export class FindIndexComponent implements OnInit {

  ngOnInit(): void {
    this.operatorFindIndex();
  }

  operatorFindIndex() {
    const names = of('Guma', 'Larissa', 'Agatha');
    const findNameIndex = names.pipe(
      tap(val => console.log('É igual a', val)),
      findIndex(x => x === 'Agatha')
    );
    findNameIndex.subscribe(console.log);
  }

}

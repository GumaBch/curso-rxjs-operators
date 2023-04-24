import { Component, OnInit } from '@angular/core';
import { find, of, tap } from 'rxjs';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  ngOnInit(): void {
    this.operatorFind();
  }

  operatorFind() {
    const names = of('Guma', 'Larissa', 'Agatha');
    const findName = names.pipe(
      tap(val => console.log('É igual a', val)),
      find(x => x === 'Agatha')
    );
    findName.subscribe(console.log);
  }
}

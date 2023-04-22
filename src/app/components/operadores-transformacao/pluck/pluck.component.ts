import { Component, OnInit } from '@angular/core';
import { from, pluck } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {

  ngOnInit(): void {
    this.operatorPluck();
  }

  operatorPluck() {
    const arr = from([
      { name: 'Guma', age: 37, job: { title: 'Desenvolvedor', language: 'Angular' }},
      { name: 'Larissa', age: 36 },
      { name: 'Agatha', age: 0 }
    ]);

    const names = arr.pipe(
      pluck('job', 'title')
    );

    names.subscribe(console.log);
  }
}

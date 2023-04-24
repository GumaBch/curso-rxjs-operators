import { Component, OnInit } from '@angular/core';
import { Subject, isEmpty } from 'rxjs';

@Component({
  selector: 'app-is-empty',
  templateUrl: './is-empty.component.html',
  styleUrls: ['./is-empty.component.css']
})
export class IsEmptyComponent implements OnInit {

  ngOnInit(): void {
    this.operatorIsEmpty();
  }

  operatorIsEmpty() {
    const subject = new Subject<string>();
    const result = subject.pipe(isEmpty());

    subject.subscribe(console.log);
    result.subscribe(console.log);
    subject.next('Guma');
  }
}

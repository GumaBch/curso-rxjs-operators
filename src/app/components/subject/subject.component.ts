import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  ngOnInit(): void {
    this.initSubject();
  }

  initSubject() {
    const subject = new Subject<number>();
    const bSubject = new BehaviorSubject(0);

    subject.subscribe({
      next: (v) => console.log(v)
    });

    bSubject.subscribe({
      next: (v) => console.log("bs", v)
    });

    subject.next(10);
    subject.next(12);
    bSubject.next(10);
    bSubject.next(12);
  }
}

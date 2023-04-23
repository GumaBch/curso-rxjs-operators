import { Component, OnInit } from '@angular/core';
import { of, startWith } from 'rxjs';

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.css']
})
export class StartWithComponent implements OnInit {

  ngOnInit(): void {
    this.operatorStartWith();
  }

  operatorStartWith() {
    const values = of(1, 2, 3);
    values.subscribe(console.log);

    const numbers = values.pipe(
      startWith(0)
    );
    numbers.subscribe(console.log);

    const messages = of('World', 'Goodbye');
    const messagesWelcome = messages.pipe(
      startWith('Hello')
    );
    messagesWelcome.subscribe(console.log);
  }
}

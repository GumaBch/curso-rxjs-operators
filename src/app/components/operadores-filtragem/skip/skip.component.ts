import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, interval, skip, tap } from 'rxjs';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.css']
})
export class SkipComponent implements AfterViewInit {

  @ViewChild('myButton') myButton!: ElementRef;

  ngAfterViewInit(): void {
    this.operatorSkip();
  }

  operatorSkip() {
    fromEvent(this.myButton.nativeElement, 'click')
      .pipe(
        skip(4),
        tap(() => console.log('Cliquei no botão'))
      ).subscribe();

    const it$ = interval(1000);
    it$.pipe(
      skip(10)
    ).subscribe(console.log);
  }
}

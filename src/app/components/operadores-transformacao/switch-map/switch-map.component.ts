import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, interval, map, switchMap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements AfterViewInit {

  constructor(private apiService: ApiService) {}

  @ViewChild('myButton') myButton!: ElementRef;

  ngAfterViewInit(): void {
    this.operatorSwitchMap();
    this.operatorInterval();
  }

  operatorInterval() {
    fromEvent(document, 'click')
      .pipe(
        switchMap(() => interval(1000))
      ).subscribe(console.log);
  }

  operatorSwitchMap() {
    fromEvent(this.myButton.nativeElement, 'click').pipe(
      switchMap(() => this.apiService.getUsersHttpSwitchMap())
    ).pipe(
      map((data: any) => data.cpf),
      switchMap(cpf => this.apiService.getUsersHttpSwitchMapSearch(cpf))
    ).subscribe(console.log);
  }

}

import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-throw-error',
  templateUrl: './throw-error.component.html',
  styleUrls: ['./throw-error.component.css']
})
export class ThrowErrorComponent implements OnInit {

  ngOnInit(): void {
    this.operatorThrowError();
  }

  operatorThrowError() {

    const error = throwError("Olá erro!");

    error.subscribe(res => {
      console.log(res)
    },
    (error) => {
      console.log('ERRRRROU! ', error)
    },
    () => console.log("Completou!"));
  }

}

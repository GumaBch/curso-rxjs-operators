import { Component, OnInit } from '@angular/core';
import { of, toArray } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.operatorToArray();
  }

  operatorToArray() {
    const obj = of({ name: 'Guma', age: 37 });
    const arr = obj.pipe(toArray());
    arr.subscribe(console.log);

    this.apiService.getUserToArray().subscribe(console.log);
  }
}

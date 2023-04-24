import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-timeout',
  templateUrl: './timeout.component.html',
  styleUrls: ['./timeout.component.css']
})
export class TimeoutComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.operatorTimeout();
  }

  operatorTimeout() {
    this.apiService.getUsersTimeout().subscribe(console.log);
  }

}

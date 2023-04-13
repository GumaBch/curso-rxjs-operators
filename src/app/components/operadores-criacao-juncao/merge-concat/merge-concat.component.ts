import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-merge-concat',
  templateUrl: './merge-concat.component.html',
  styleUrls: ['./merge-concat.component.css']
})
export class MergeConcatComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // this.getUsersMerge();
    this.getUsersConcat();
  }

  getUsersMerge() {
    this.apiService.getUsersMerge().subscribe(console.log)
  }

  getUsersConcat() {
    this.apiService.getUsersConcat().subscribe(console.log)
  }
}

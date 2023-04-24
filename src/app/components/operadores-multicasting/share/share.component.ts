import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.operatorShare();
  }

  operatorShare() {
    const obsUser$ = this.apiService.getUsersShare();
    const nameAmanda$ = obsUser$.pipe(
      map((data: any) => data.filter((value: any) => value.name === 'Amanda'))
    );
    const nameJao$ = obsUser$.pipe(
      map((data: any) => data.filter((value: any) => value.name === 'Jão'))
    );

    obsUser$.subscribe(console.log);
    nameAmanda$.subscribe(console.log);
    nameJao$.subscribe(console.log);
  }
}

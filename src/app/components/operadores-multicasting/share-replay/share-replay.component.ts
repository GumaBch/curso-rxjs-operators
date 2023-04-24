import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.css']
})
export class ShareReplayComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.operatorShareReplay();
  }

  operatorShareReplay() {
    const obsUser$ = this.apiService.getUsersShareReplay();
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

import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  numTickets: Observable<number> = this.backendService
    .tickets()
    .pipe(map(x => x.length));
  numUsers: Observable<number> = this.backendService
    .users()
    .pipe(map(x => x.length));

  constructor(private backendService: BackendService) {}

  ngOnInit() {}
}

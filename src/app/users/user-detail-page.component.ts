import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { BackendService } from '../backend.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail-page',
  template: `
    <h1>User Detail</h1>
    <app-user-detail [user]="user$ | async"></app-user-detail>
  `,
  styles: []
})
export class UserDetailPageComponent implements OnInit {
  user$ = this.activatedRoute.paramMap.pipe(
    switchMap(params => this.backendService.userById(+params.get('id')))
  );

  constructor(
    private backendService: BackendService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {}
}

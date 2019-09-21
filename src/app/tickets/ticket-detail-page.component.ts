import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-ticket-detail-page',
  template: `
    <h1>Detail</h1>
    <app-ticket-detail [ticket]="ticket$ | async"></app-ticket-detail>
  `,
  styles: []
})
export class TicketDetailPageComponent implements OnInit {
  ticket$ = this.activatedRoute.paramMap.pipe(
    switchMap(params => this.backendService.ticketById(+params.get('id')))
  );

  constructor(
    private backendService: BackendService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {}
}

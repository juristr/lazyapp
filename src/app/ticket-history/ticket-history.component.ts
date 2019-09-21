import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-ticket-history',
  templateUrl: './ticket-history.component.html',
  styleUrls: ['./ticket-history.component.scss']
})
export class TicketHistoryComponent implements OnInit {
  ticketHistory$ = this.backendService.ticketHistory();

  constructor(private backendService: BackendService) {}

  ngOnInit() {}
}

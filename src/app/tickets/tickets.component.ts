import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'description'];
  tickets$ = this.backendService.tickets();

  constructor(private backendService: BackendService) {}

  ngOnInit() {}
}

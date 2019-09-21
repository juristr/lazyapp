import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { TicketHistory, BackendService } from '../../backend.service';
import { combineLatest, of } from 'rxjs';

@Component({
  selector: 'app-ticket-history-list',
  templateUrl: './ticket-history-list.component.html',
  styleUrls: ['./ticket-history-list.component.scss']
})
export class TicketHistoryListComponent implements OnInit {
  private _actionsTemplate: TemplateRef<any>;
  displayedColumns: string[] = ['change', 'user'];
  @Input() ticketHistory: TicketHistory[];

  @Input()
  set actionsTemplate(val: TemplateRef<any>) {
    if (val) {
      this._actionsTemplate = val;

      if (
        this.displayedColumns &&
        !this.displayedColumns.find(x => x === 'actions')
      ) {
        // push at end
        this.displayedColumns.push('actions');
      }
    }
  }
  get actionsTemplate() {
    return this._actionsTemplate;
  }

  ticketHistory$ = combineLatest(of(this.ticketHistory));

  constructor(private backendService: BackendService) {}

  ngOnInit() {}
}

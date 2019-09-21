import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Ticket } from '../../backend.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
  private _actionsTemplate: TemplateRef<any>;
  displayedColumns: string[] = ['ID', 'description'];

  @Input() tickets: Ticket[];

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

  constructor() {}

  ngOnInit() {}
}

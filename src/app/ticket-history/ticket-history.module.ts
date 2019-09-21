import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketHistoryRoutingModule } from './ticket-history-routing.module';
import { TicketHistoryComponent } from './ticket-history.component';
import { TicketHistoryListComponent } from './ticket-history-list/ticket-history-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TicketHistoryComponent, TicketHistoryListComponent],
  imports: [
    CommonModule,
    TicketHistoryRoutingModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class TicketHistoryModule {}

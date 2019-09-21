import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './tickets.component';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TicketsComponent, TicketListComponent],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTableModule
  ]
})
export class TicketsModule {}

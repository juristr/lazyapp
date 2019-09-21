import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './tickets.component';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketDetailPageComponent } from './ticket-detail-page.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    TicketsComponent,
    TicketListComponent,
    TicketDetailComponent,
    TicketDetailPageComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatTabsModule,
    MatDialogModule
  ],
  exports: [TicketListComponent]
})
export class TicketsModule {}

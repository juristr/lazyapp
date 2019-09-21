import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketsComponent } from './tickets.component';
import { TicketDetailPageComponent } from './ticket-detail-page.component';

const routes: Routes = [
  { path: '', component: TicketsComponent },
  { path: ':id', component: TicketDetailPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketHistoryComponent } from './ticket-history.component';

const routes: Routes = [{ path: '', component: TicketHistoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketHistoryRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'tickets',
    loadChildren: () =>
      import('./tickets/tickets.module').then(m => m.TicketsModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  // {
  //   path: 'ticket-history',
  //   loadChildren: () =>
  //     import('./ticket-history/ticket-history.module').then(
  //       m => m.TicketHistoryModule
  //     )
  // },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

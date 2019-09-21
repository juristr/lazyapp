import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { UserDetailPageComponent } from './user-detail-page.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TicketsModule } from '../tickets/tickets.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent,
    UserDetailPageComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatTabsModule,
    MatDialogModule,
    // need to import, otherwise we cannot use the component
    TicketsModule
  ]
})
export class UsersModule {}

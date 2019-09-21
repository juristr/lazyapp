import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [UsersComponent, UserListComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class UsersModule {}

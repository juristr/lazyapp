import { Component, OnInit, Input, Inject, Optional } from '@angular/core';
import { User, BackendService, Ticket } from '../../backend.service';
import { map } from 'rxjs/operators';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog
} from '@angular/material/dialog';
// import { TicketDetailComponent } from 'src/app/tickets/ticket-detail/ticket-detail.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  @Input() user: User;
  userTickets$ = this.backendService
    .tickets()
    .pipe(map(tickets => tickets.filter(x => x.assigneeId === this.user.id)));

  constructor(
    private backendService: BackendService,
    private matDialog: MatDialog,
    @Optional() private dialogRef: MatDialogRef<UserDetailComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: { user: User }
  ) {
    if (this.dialogRef) {
      this.user = data.user;
    }
  }

  ngOnInit() {}

  onOpenTicketDetails(ticket: Ticket) {
    // this.matDialog.open(TicketDetailComponent, {
    //   width: '650px',
    //   data: {
    //     ticket
    //   }
    // });
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { BackendService, Ticket } from 'src/app/backend.service';
import { of, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailComponent } from 'src/app/users/user-detail/user-detail.component';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss']
})
export class TicketDetailComponent implements OnInit {
  @Input() ticket: Ticket;

  vm$;

  constructor(
    private backendService: BackendService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.vm$ = combineLatest(
      of(this.ticket),
      this.backendService.userById(this.ticket.assigneeId)
    ).pipe(
      map(([ticket, assignee]) => ({
        ticket,
        assignee
      }))
    );
  }

  openUserDetail(userId) {
    this.backendService.userById(userId).subscribe(user => {
      this.dialog.open(UserDetailComponent, {
        width: '650px',
        data: {
          user
        }
      });
    });
  }
}

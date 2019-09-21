import {
  Component,
  OnInit,
  Input,
  ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core';
import { BackendService, Ticket } from 'src/app/backend.service';
import { of, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { DynamicHostComponent } from 'src/app/shared/dynamic-host';

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
      this.backendService.userById(this.ticket.assigneeId),
      this.backendService.ticketHistory(this.ticket.id),
      this.backendService.users() // don't do this in production
    ).pipe(
      map(([ticket, assignee, ticketHistory, users]) => ({
        ticket,
        assignee,
        ticketHistory: ticketHistory.reverse().map(entry => {
          let changeMsg;

          if (entry.change === 'created') {
            changeMsg = 'opened the issue';
          } else if (entry.change === 'assigned') {
            changeMsg = 'assigned the issue';
          } else if (entry.change === 'resolved') {
            changeMsg = 'resolved the issue';
          }

          return {
            userId: entry.userId,
            userName: users.find(x => x.id === entry.userId).name,
            changeMsg
          };
        })
      }))
    );
  }

  openUserDetail(userId) {
    this.backendService.userById(userId).subscribe(user => {
      this.dialog.open(DynamicHostComponent, {
        width: '650px',
        data: {
          selector: 'dynel-user-detail',
          cmpInputs: {
            user
          }
        }
      });
      // this.dialog.open(UserDetailComponent, {
      //   width: '650px',
      //   data: {
      //     user
      //   }
      // });
    });
  }

  openUserDetailIvy(userId) {
    import('../../users/user-detail/user-detail.component').then(
      ({ UserDetailComponent }) => {
        this.backendService.userById(userId).subscribe(user => {
          this.dialog.open(UserDetailComponent, {
            width: '650px',
            data: {
              user
            }
          });
        });
      }
    );
  }
}

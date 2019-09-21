import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export type User = {
  id: number;
  name: string;
};

export type Ticket = {
  id: number;
  description: string;
  assigneeId: number;
  completed: boolean;
};

export type TicketHistory = {
  id: number;
  ticketId: number;
  userId: number;
  change: 'created' | 'assigned' | 'resolved' | 'change';
};

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private storedTickets: Ticket[] = [
    {
      id: 1,
      description: 'Write a blog post about Angular Connect',
      assigneeId: 111,
      completed: false
    },
    {
      id: 2,
      description: 'Record Egghead video',
      assigneeId: 111,
      completed: false
    },
    {
      id: 3,
      description: 'Learn aboug ngrx/components',
      assigneeId: null,
      completed: false
    },
    {
      id: 4,
      description: 'Finish ngrome presentation',
      assigneeId: null,
      completed: false
    }
  ];

  private storedTicketHistory: TicketHistory[] = [
    {
      id: 1,
      ticketId: 1,
      userId: 333,
      change: 'created'
    }
  ];

  private storedUsers: User[] = [
    { id: 111, name: 'Juri' },
    { id: 222, name: 'Mark' },
    { id: 333, name: 'Jeff' }
  ];

  constructor() {}

  tickets() {
    return of(this.storedTickets);
  }

  users() {
    return of(this.storedUsers);
  }

  ticketHistory(ticketId: number = null) {
    if (ticketId) {
      return of(this.storedTicketHistory.filter(x => x.ticketId === ticketId));
    } else {
      return of(this.storedTicketHistory);
    }
  }

  userById(userId) {
    return of(this.storedUsers.find(x => x.id === userId));
  }

  ticketById(ticketId) {
    return of(this.storedTickets.find(x => x.id === ticketId));
  }
}

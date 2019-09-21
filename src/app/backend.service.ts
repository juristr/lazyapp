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
}

import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { User } from '../../backend.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  private _actionsTemplate: TemplateRef<any>;
  displayedColumns: string[] = ['ID', 'name'];

  @Input() users: User[];

  @Input()
  set actionsTemplate(val: TemplateRef<any>) {
    if (val) {
      this._actionsTemplate = val;

      if (
        this.displayedColumns &&
        !this.displayedColumns.find(x => x === 'actions')
      ) {
        // push at end
        this.displayedColumns.push('actions');
      }
    }
  }
  get actionsTemplate() {
    return this._actionsTemplate;
  }

  constructor() {}

  ngOnInit() {}
}

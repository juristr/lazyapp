import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  template: `
    <mat-list>
      <mat-list-item>
        <button mat-button>
          <mat-icon>home</mat-icon>
          Home
        </button>
      </mat-list-item>
    </mat-list>
  `,
  styles: [
    `
      mat-list,
      mat-list-item,
      mat-list-item button {
        display: block;
        width: 100%;
      }

      mat-list-item {
        button {
          text-align: left;
          padding: 10px 20px;
          color: #656565;
        }

        mat-icon {
          margin-right: 10px;
        }
      }

      hr {
        border-top: solid 1px #e0e0e0;
        border-bottom: none;
        width: 100%;
      }

      .route-active {
        background-color: #e0e0e0;
      }
    `
  ]
})
export class SidenavComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

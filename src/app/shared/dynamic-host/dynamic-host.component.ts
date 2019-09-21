import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import {
  ComponentLoaderService,
  LazyCmpLoadedEvent
} from '@juristr/ngx-lazy-el';

@Component({
  selector: 'app-dynamic-host',
  template: `
    <div *ngIf="!error; else errorDisplay">Loading...</div>
    <ng-template #errorDisplay>
      <div>{{ error }}</div>
      <button mat-raised-button (click)="onClose()">Close</button>
    </ng-template>
  `
})
export class DynamicHostComponent implements OnInit {
  // @ViewChild('container', { static: true }) containerTpl: TemplateRef<any>;
  private dynamicComponentSelector: string;
  error: string;

  constructor(
    private elementRef: ElementRef,
    private componentLoader: ComponentLoaderService,
    // private matDialog: MatDialog,
    protected dialogRef: MatDialogRef<DynamicHostComponent>,
    @Inject(MAT_DIALOG_DATA) private data
  ) {
    this.dynamicComponentSelector = this.data.selector;
  }

  ngOnInit() {
    window.requestAnimationFrame(() => {
      try {
        this.componentLoader
          .loadComponent(this.dynamicComponentSelector)
          .then((ev: LazyCmpLoadedEvent) => {
            if (this.data.cmpInputs) {
              Object.keys(this.data.cmpInputs).forEach(key => {
                ev.componentInstance[key] = this.data.cmpInputs[key];
              });
            }

            // clear
            while (this.elementRef.nativeElement.firstChild) {
              this.elementRef.nativeElement.removeChild(
                this.elementRef.nativeElement.firstChild
              );
            }

            this.elementRef.nativeElement.prepend(ev.componentInstance);
          })
          .catch(() => this.handleError(this.dynamicComponentSelector));
      } catch (err) {
        this.handleError(this.dynamicComponentSelector);
      }
    });
  }

  onClose() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  private handleError(selector: string) {
    this.error = `Unable to load "${selector}".`;
  }
}

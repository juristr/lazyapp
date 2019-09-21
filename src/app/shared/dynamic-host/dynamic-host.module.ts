import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicHostComponent } from './dynamic-host.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [DynamicHostComponent],
  exports: [DynamicHostComponent],
  entryComponents: [DynamicHostComponent]
})
export class DynamicHostModule {}

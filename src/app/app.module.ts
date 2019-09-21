import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { NgxLazyElModule, fakeMatcher } from '@juristr/ngx-lazy-el';
import { SidenavComponent } from './sidenav.component';

const lazyComponentsConfig = [
  {
    selector: 'dynel-ticket-list',
    matcher: fakeMatcher,
    loadChildren: () =>
      import('./tickets/tickets.module').then(m => m.TicketsModule)
  },
  {
    selector: 'dynel-ticket-detail',
    matcher: fakeMatcher,
    loadChildren: () =>
      import('./tickets/tickets.module').then(m => m.TicketsModule)
  },
  {
    selector: 'dynel-user-detail',
    matcher: fakeMatcher,
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  }
];

@NgModule({
  declarations: [AppComponent, SidenavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    NgxLazyElModule.forRoot(lazyComponentsConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

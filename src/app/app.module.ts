import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxKjuaModule } from 'ngx-kjua';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QrRoutingModule } from './modeule/qr/qr-routing.module';
import { QrModule } from './modeule/qr/qr.module';
import { TeamRoutingModule } from './modeule/team/team-routing.module';
import { TeamModule } from './modeule/team/team.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgxKjuaModule,
    FormsModule,
    TeamRoutingModule,
    QrRoutingModule,
    QrModule,
    TeamModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

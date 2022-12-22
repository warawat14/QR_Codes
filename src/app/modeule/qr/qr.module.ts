
import { QrcodeComponent } from './qrcode/qrcode.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxKjuaModule } from 'ngx-kjua';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { QrRoutingModule } from './qr-routing.module';
import { TeamRoutingModule } from '../team/team-routing.module';




@NgModule({
  declarations: [
    QrcodeComponent,
  ],
  imports: [
    CommonModule,
    NgxKjuaModule,
    FormsModule,
    BrowserModule,
    QrRoutingModule,
    TeamRoutingModule,
    ReactiveFormsModule,
  ]
})
export class QrModule { }

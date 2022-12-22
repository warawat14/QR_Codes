import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeamComponent } from './team/team.component';
import { TeamRoutingModule } from './team-routing.module';
import { QrRoutingModule } from '../qr/qr-routing.module';
import { BlinkedQrModule } from 'blinked-qr';



@NgModule({
  declarations: [
    TeamComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BlinkedQrModule,
    FormsModule,
    TeamRoutingModule,
    QrRoutingModule,
    ReactiveFormsModule,
  
  ]
})
export class TeamModule { }

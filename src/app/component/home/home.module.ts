import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../../share-module/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//  Component
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from '../common/header/header.component';
import { FooterComponent } from '../common/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VerificationProcessComponent } from './verification-process/verification-process.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    VerificationProcessComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }

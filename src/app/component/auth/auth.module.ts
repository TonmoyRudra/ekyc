import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import {CanvasWhiteboardModule} from 'ng2-canvas-whiteboard';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CanvasWhiteboardModule
  ]
})
export class AuthModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    // BrowserModule,
    AuthRoutingModule,
    SharedModule,
  ]
})
export class AuthModule { }

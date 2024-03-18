import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { BaseComponent } from './base/base.component';
import { AuthService } from '../auth/services/auth.service';
import { MaterialModule } from 'src/app/core/material.module';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    BaseComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule
  ],
  providers: [
    AuthService
  ]
})
export class LayoutModule { }

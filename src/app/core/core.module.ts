import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app.reducers';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument()
  ]
})
export class CoreModule { }

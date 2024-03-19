import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { MaterialModule } from 'src/app/core/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpotifyService } from 'src/app/core/services/spotify.service';
import { ResultsComponent } from './components/results/results.component';
import { SpotifyModel } from 'src/app/core/models/spotify.model';
import { SearchModel } from './models/search.model';


@NgModule({
  declarations: [
    SearchComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[
    SpotifyService,
    SpotifyModel,
    SearchModel

  ]
})
export class SearchModule { }

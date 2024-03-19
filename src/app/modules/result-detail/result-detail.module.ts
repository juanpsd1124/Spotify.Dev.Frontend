import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultDetailRoutingModule } from './result-detail-routing.module';
import { ResultDetailComponent } from './result-detail.component';
import { SearchModel } from '../search/models/search.model';
import { SpotifyModel } from 'src/app/core/models/spotify.model';
import { SpotifyService } from 'src/app/core/services/spotify.service';
import { MaterialModule } from 'src/app/core/material.module';


@NgModule({
  declarations: [
    ResultDetailComponent
  ],
  imports: [
    CommonModule,
    ResultDetailRoutingModule,
    MaterialModule
  ],
  providers: [
    SearchModel,
    SpotifyModel,
    SpotifyService
  ]
})
export class ResultDetailModule { }

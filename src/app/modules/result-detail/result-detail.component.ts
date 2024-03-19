import { Component } from '@angular/core';
import { SearchModel } from '../search/models/search.model';
import { EResultType } from 'src/app/core/enum/result-type.enum';
import { SpotifyService } from 'src/app/core/services/spotify.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-result-detail',
  templateUrl: './result-detail.component.html',
  styleUrls: ['./result-detail.component.scss']
})
export class ResultDetailComponent {


  /**
   * Variable to store result id
   */
  public resultId: string;

  /**
   * Variable to store result type
   */
  public resultType: string;

  /**
   * Variable to store result type
   */
  public token: string;

  /**
   * Result type enum
   */
  public eResultType = EResultType;

  /**
   * Variable to store result data
   */
  public resultDetail: any;

  /**
   * Constructor method for dependency injections 
   * @param _searchModel Search model
   * @param _spotifyService Spotify service
   * @param _location Locantion dependency injection
   */
  constructor(
    private _searchModel: SearchModel,
    private _spotifyService: SpotifyService,
    private _location: Location
  ){}

  /**
   * Method executed at component creation
   */
  ngOnInit(){
    this.token = localStorage.getItem('token')
    this.initializeSubscriptions();
    this.retrieveInfo();
  }

  /**
   * Method executed to initialize subscriptions
   */
  public initializeSubscriptions(): void {
    const resultIdSub = this._searchModel.getResultId$.subscribe( (data) => {
      this.resultId = data;
    })

    const resultTypeSub = this._searchModel.getResultType$.subscribe( (data) => {
      this.resultType = data;
    })

  }

  /**
   * Method for retrieve result id Info
   */
  public retrieveInfo(): void {

    switch(this.resultType) {
      case this.eResultType.track:
        this.searchTrack();
        break;
      case this.eResultType.album:
        this.searchAlbum();
        break;
      case this.eResultType.artist:
        this.searchArtist();
        break;

    }
  }

  /**
   * Method for artist search using unique id
   */
  public searchArtist(): void {
    const artistSub = this._spotifyService.searchArtist(this.resultId, this.token).subscribe((result) => {
      this.resultDetail = result;
    })
  }

  /**
   * Method for album search using unique id
   */  
  public searchAlbum(): void {
    const artistSub = this._spotifyService.searchAlbum(this.resultId, this.token).subscribe((result) => {
      this.resultDetail = result;
    })
  }

  /**
   * Method for track search using unique id
   */
  public searchTrack(): void {
    const artistSub = this._spotifyService.searchTrack(this.resultId, this.token).subscribe((result) => {
      this.resultDetail = result;
    })
  }

  /**
   * Method to go back to last page
   */
  public goBack():void {
    this._location.back();
  }

}

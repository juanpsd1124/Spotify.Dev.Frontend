import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EResultType } from 'src/app/core/enum/result-type.enum';
import { ArtistResult } from 'src/app/core/interfaces/result/artist-result.interface';
import { SpotifyModel } from 'src/app/core/models/spotify.model';
import { SpotifyService } from 'src/app/core/services/spotify.service';
import { SearchModel } from './models/search.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  /** 
   * Variable to define search bar form
   */
  public searchForm: FormGroup;

  /**
   * Variable to store artists results
   */
  public artistResults: Array<any>

  /**
   * Variable to store artists results
   */
  public albumResults: Array<any>

  /**
   * Variable to store artists results
   */
  public trackResults: Array<any>

  /**
   * Result type enum
   */
  public eResultType = EResultType;

  /**
   * Constructor method for dependency injections 
   * @param _formBuilder Formbuilder instance
   * @param _spotifyModel Spotify model
   * @param _activeRoute Angular active route instance

   */
  constructor(
    private _formBuilder: FormBuilder,
    private _spotifyModel: SpotifyModel,
    private _activeRoute: ActivatedRoute,
    private _route: Router,
    private _searchModel: SearchModel
  ){}

  /**
   * Method executed at component creation
   */
  ngOnInit(){
    this.initForms();
    if(this._activeRoute.snapshot.queryParamMap.get('resToken')) localStorage.setItem('token', this._activeRoute.snapshot.queryParamMap.get('resToken'));
  }
    
  /**
   * Method to initialize searchbar form
   */
  public initForms(): void {
    this.searchForm = this._formBuilder.group({
      searchBar: [null]
    })
  };

  /**
   * Method for search terms un spotify
   */
  public searchItems(): void {
    if(this.searchForm?.get('searchBar').value){
      this._spotifyModel.searchItems(this.searchForm?.get('searchBar').value, localStorage.getItem('token')).subscribe(result => {
        console.log(result)

        if(result) {
          this.artistResults = result.artists.items;
          this.albumResults = result.albums.items;
          this.trackResults = result.tracks.items;
        }

      });
    }
  }

  /**
   * Method to go to details page
   */
  public goToDetail(resultId: string, resultType: string): void {
    this._searchModel.loadResultId(resultId);
    this._searchModel.loadResultType(resultType);
    this._route.navigateByUrl('/home/result-detail')
  }
    
}

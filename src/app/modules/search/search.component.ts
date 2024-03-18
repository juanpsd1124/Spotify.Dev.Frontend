import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EResultType } from 'src/app/core/enum/result-type.enum';
import { ArtistResult } from 'src/app/core/interfaces/result/artist-result.interface';
import { SpotifyModel } from 'src/app/core/models/spotify.model';
import { SpotifyService } from 'src/app/core/services/spotify.service';

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
   * Result type enum
   */
  public eResultType = EResultType;

  /**
   * Metodo constructor para realizar inyeccion de dependencias
   * @param _http Angular Http Client 
   */
  constructor(
    private formBuilder: FormBuilder,
    private _spotifyModel: SpotifyModel,
    private _activeRoute: ActivatedRoute
  ){}

  /**
   * Method executed at component creation
   */
  ngOnInit(){
    this.initForms();
console.log("jp ~ ngOnInit ~ this._activeRoute.snapshot.queryParamMap.get('resToken'):", this._activeRoute.snapshot.queryParamMap.get('resToken'));
    localStorage.setItem('token', this._activeRoute.snapshot.queryParamMap.get('resToken'))
  }
    

  public initForms(): void {
    this.searchForm = this.formBuilder.group({
      searchBar: [null]
    })
  };

  public searchItems(): void {
    if(this.searchForm?.get('searchBar').value){
      this._spotifyModel.searchItems(this.searchForm?.get('searchBar').value, localStorage.getItem('token')).subscribe(result => {
        console.log(result)

        if(result) {
          this.artistResults = result.artists.items;
          this.albumResults = result.albums.items;
        }

      });
    }
  }
    








}

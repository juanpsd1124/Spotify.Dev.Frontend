import { Injectable } from "@angular/core";
import { SpotifyService } from "../services/spotify.service";
import { AppState } from "../store/app.interface";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";


@Injectable()
export class SpotifyModel {

    /**
     * Method to perform dependency injections
     * @param _spotifyService Service for spotify api requests
     * @param _store Redux store methods
     */
    constructor(
        private _spotifyService: SpotifyService,
        private _store: Store<AppState>,
    ) {}

    /**
     * Method for search term info
     * @param term search term
     * @returns Observable with data response
     */
    public searchItems(term: string, token: string): Observable<any> {
        return this._spotifyService.searchItems(term, token);
    }

}

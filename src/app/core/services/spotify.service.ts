import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { HttpService } from "src/app/core/services/http.service";
import { enviroment } from "src/app/environments/environments";

@Injectable()
export class SpotifyService {

    /**
     * Constructor method for dependency injections
     * @param _http Angular Http Client 
     */
    constructor(
        private _http: HttpService,
    ){}

    /**
     * Method for search term info
     * @param term search term
     * @returns Observable with data response
     */
    public searchItems(term: string, token: string): Observable<any> {
        const params = [{key: 'term', value:`${term}`},
                        {key: 'token', value:`${token}`}]
        return this._http.get('http://localhost:5066/api/Spotify/searchTerm',params)
    }

    /**
     * Method for search term info
     * @param term search term
     * @returns Observable with data response
     */
    public searchArtist(id: string, token: string): Observable<any> {
        const params = [{key: 'token', value:`${token}`}]
        return this._http.get(`http://localhost:5066/api/Spotify/searchArtist/${id}`,params)
    }

    /**
     * Method for search term info
     * @param term search term
     * @returns Observable with data response
     */
    public searchAlbum(id: string, token: string): Observable<any> {
        const params = [{key: 'token', value:`${token}`}]
        return this._http.get(`http://localhost:5066/api/Spotify/searchAlbum/${id}`,params)
    }

    /**
     * Method for search term info
     * @param term search term
     * @returns Observable with data response
     */
    public searchTrack(id: string, token: string): Observable<any> {
        const params = [{key: 'token', value:`${token}`}]
        return this._http.get(`http://localhost:5066/api/Spotify/SearchTrack/${id}`,params)
    }
   
}
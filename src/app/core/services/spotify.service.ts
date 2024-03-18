import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { HttpService } from "src/app/core/services/http.service";
import { enviroment } from "src/app/environments/environments";


@Injectable()
export class SpotifyService {

    /**
     * Metodo constructor para realizar inyeccion de dependencias
     */
    constructor(
        private _http: HttpService,
        private _router: ActivatedRoute,
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
   
    
}
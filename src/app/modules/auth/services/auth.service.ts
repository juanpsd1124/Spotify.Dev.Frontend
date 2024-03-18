import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { HttpService } from "src/app/core/services/http.service";
import { enviroment } from "src/app/environments/environments";


@Injectable()
export class AuthService {

    private spotifyClientId: string = enviroment.spotify_client_id

    private spotifyClientSecret: string = enviroment.spotify_client_secret

    private spotifyRedirectUrl: string = enviroment.spotify_redirect_url

    public spotifyAuthUrl: string = 'https://accounts.spotify.com/authorize';

    public spotifyGetTokenUrl: string = 'https://accounts.spotify.com/api/token';

    /**
     * Metodo constructor para realizar inyeccion de dependencias
     */
    constructor(
        private _http: HttpService,
        private _router: ActivatedRoute,
    ){}

    public loginSpotify(): void {
        const loginUrl = `https://accounts.spotify.com/authorize?client_id=${this.spotifyClientId}&response_type=code&redirect_uri=${this.spotifyRedirectUrl}`
        window.location.href = loginUrl;
        
    }

    // public getToken(): Observable<any> {
    //     const code = this._router.snapshot.queryParamMap.get('code');
    //     console.log("jp ~ getToken ~ code:", code);
    //     const params = [{key:'code', value: code },]

        
    //     return this._http.post("http://localhost:5066/api/Spotify/login", null , params);
    // }
    
}
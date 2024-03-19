import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { HttpService } from "src/app/core/services/http.service";
import { enviroment } from "src/app/environments/environments";


@Injectable()
export class AuthService {

    /**
     * Variable to sore spotify client Id 
     */
    private spotifyClientId: string = enviroment.spotify_client_id

    /**
     * Variable to sore spotify redirect Url
     */
    private spotifyRedirectUrl: string = enviroment.spotify_redirect_url

    /**
     * Constructor method for dependency injections 
     */
    constructor(
    ){}

    /**
     * Method for login in spotify APP
     */
    public loginSpotify(): void {
        const loginUrl = `https://accounts.spotify.com/authorize?client_id=${this.spotifyClientId}&response_type=code&redirect_uri=${this.spotifyRedirectUrl}`
        window.location.href = loginUrl;
    }
    
}
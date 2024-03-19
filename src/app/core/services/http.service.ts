import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from  '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class HttpService {

    /**
     * Constructor method for dependency injections
     * @param _http Angular Http Client 
     */
    constructor(
        private _http: HttpClient
    ){}

    /**
     * Method to make http get request
     * @param url url to consume
     * @param httpParams Http query params
     * @param httpHeaders Http headers
     * @returns Observable with server response
     */
    public get<T>(url: string, httpParams: Array<any>, httpHeaders?: Array<any>): Observable<T> {
        let params = new HttpParams();
        if(httpParams) httpParams.forEach( param => params = params.append(param.key, param.value))

        let headers = new HttpHeaders()
        httpHeaders?.forEach( header => headers = headers.append(header.name, header.value))

        return this._http.get<T>(url, {params, headers})
    }

    /**
     * Method to make http post request
     * @param url url to consume
     * @param bodyParams body object
     * @param httpParams Http query params
     * @param httpHeaders Http headers
     * @returns Observable with server response
     */
    public post<T>(url: string, bodyParams: any = null, httpParams: Array<any>, httpHeaders?: Array<any>): Observable<T>{
        let params = new HttpParams();
        
        if(httpParams) httpParams.forEach( param => params = params.append(param.key, param.value))

        let headers = new HttpHeaders()
        
        httpHeaders?.forEach( header => headers = headers.append(header.name, header.value))
        return this._http.post<T>(url, bodyParams, {params, headers})
    }
        

}
    

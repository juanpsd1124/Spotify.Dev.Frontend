import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from  '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class HttpService {

    /**
     * Metodo constructor para realizar inyeccion de dependencias
     * @param _http Angular Http Client 
     */
    constructor(
        private _http: HttpClient
    ){}

    /**
     * 
     * @param url url to consume
     * @param httpParams Http query params
     * @returns Observable with server response
     */
    public get<T>(url: string, httpParams: Array<any>, httpHeaders?: Array<any>): Observable<T> {
        let params = new HttpParams();
        if(httpParams) httpParams.forEach( param => params = params.append(param.key, param.value))

        let headers = new HttpHeaders()
        httpHeaders?.forEach( header => headers = headers.append(header.name, header.value))

        return this._http.get<T>(url, {params, headers})
    }


    public post<T>(url: string, bodyParams: any = null, httpParams: Array<any>, httpHeaders?: Array<any>): Observable<T>{
        let params = new HttpParams();
        
        if(httpParams) httpParams.forEach( param => params = params.append(param.key, param.value))

        let headers = new HttpHeaders()
        
        httpHeaders?.forEach( header => headers = headers.append(header.name, header.value))
        return this._http.post<T>(url, bodyParams, {params, headers})
    }
        

}
    

import { CookieService } from './cookie.service';
import { Inject, Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    private environment: any;

    constructor(
        private httpClient: HttpClient,
        private cookieService: CookieService,
        @Inject('env') env: any
    ) {
        this.environment = env;
    }


    get(url: string, qParams: any = {}): Observable<any> {
        const xKey = this.cookieService.getCookie('x_key');
        const authHeader = (xKey) ? 'Bearer ' + xKey : 'Bearer';

        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': authHeader,
                'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
                'Pragma': 'no-cache',
                'Expires': '0'
            }),
            body: {},
            params: qParams
        };

        return this.httpClient.get(this.environment.api + url, options);
    }

    post(url: string, data: any): Observable<any> {
        const xKey = this.cookieService.getCookie('x_key');
        const authHeader = (xKey) ? 'Bearer ' + xKey : 'Bearer';

        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': authHeader,
                'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
                'Pragma': 'no-cache',
                'Expires': '0'
            }),

        };

        return this.httpClient.post(this.environment.api + url, data, options);
    }

    put(url: string, data: any): Observable<any> {
        const xKey = this.cookieService.getCookie('x_key');
        const authHeader = (xKey) ? 'Bearer ' + xKey : 'Bearer';

        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': authHeader,
                'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
                'Pragma': 'no-cache',
                'Expires': '0'
            }),

        };

        return this.httpClient.put(this.environment.api + url, data, options);
    }

    delete(url: string): Observable<any> {
        const xKey = this.cookieService.getCookie('x_key');
        const authHeader = (xKey) ? 'Bearer ' + xKey : 'Bearer';

        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': authHeader,
                'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
                'Pragma': 'no-cache',
                'Expires': '0'
            }),

        };

        return this.httpClient.delete(this.environment.api + url, options);
    }

}

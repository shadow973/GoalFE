import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CoreService {

    constructor(
        private httpService: HttpService
    ) { }

    search(query: string): Observable<any> {
        return this.httpService.get('search', {
            q: query,
            per_page: 5
        });
    }

    searchArticles(query: string, p: number): Observable<any> {
        return this.httpService.get('articles/search', {
            q: query,
            page: p
        });
    }

    searchTeams(query: string): Observable<any> {
        return this.httpService.get(`teams/search/${query}`, {
            page: 1,
            per_page: 10
        });
    }
}

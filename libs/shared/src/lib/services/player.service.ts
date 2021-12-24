import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PlayerService {

    constructor(
        private httpService: HttpService
    ) { }

    getPlayerInfo(playerId: number): Observable<any> {
        return this.httpService.get(`livescoreplayer/info/${playerId}`);
    }

    getPlayerNews(playerId: number, p: number): Observable<any> {
        return this.httpService.get(`livescoreplayer/articles/${playerId}`, {
            options: 'paginate',
            per_page: 30,
            page: p
        });
    }
}

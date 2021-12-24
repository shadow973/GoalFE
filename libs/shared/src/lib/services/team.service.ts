import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TeamService {

    constructor(
        private httpService: HttpService
    ) { }

    getTeamInfo(teamId: number): Observable<any> {
        return this.httpService.get(`teams/info/${teamId}`);
    }

    getUserTeamNews(teamId: number): Observable<any> {
        return this.httpService.get(`teams/articles/${teamId}`, {
            options: 'paginate',
            per_page: 7,
            page: 1
        });
    }

    getUserTeamMatches(teamId: number): Observable<any> {
        return this.httpService.get(`teams/matches/${teamId}`, {
            order: 1,
            short: 1,
            per_page: 7,
            page: 1
        });
    }

    getTeamStandingsBySeason(teamId: number): Observable<any> {
        return this.httpService.get(`teams/standings/${teamId}`, {
            byseason: 1
        });
    }

    getUserTeamStats(teamId: number): Observable<any> {
        return this.httpService.get(`teams/stats/${teamId}`, {
            page: 1,
            per_page: 5
        });
    }

    //inner page
    getTeamNews(teamId: number, p: number, perPage: number = 30): Observable<any> {
        return this.httpService.get(`teams/articles/${teamId}`, {
            options: 'paginate',
            per_page: perPage,
            page: p
        });
    }

    getTeamMatches(teamId: number, p: number): Observable<any> {
        return this.httpService.get(`teams/matches/${teamId}`, {
            per_page: 16,
            page: p,
            order:0
        });
    }

    getTeamStats(teamId: number): Observable<any> {
        return this.httpService.get(`teams/stats/${teamId}`, {
            per_page: 15,
            page: 1
        });
    }

    getTeamPlayers(teamId: number): Observable<any> {
        return this.httpService.get(`teams/players/${teamId}`, {
            per_page: 1000,
            page: 1
        });
    }

    getTeamStanding(teamId: number): Observable<any> {
      return this.httpService.get(`teams/standings/${teamId}`);
  }

    getTeamTransfers(teamId: number, p: number): Observable<any> {
        return this.httpService.get(`teams/transfers/${teamId}`, {
            per_page: 10,
            page: p
        });
    }

    getTeamFullData(teamId: number, matchesLimit: number) {
        return this.httpService.get(`teams/data/${teamId}?matches_limit=${matchesLimit}`);
    }

    // getUserTeamFullData(teamId: number): Observable<any> {
    //     return this.httpService.get(`teams/${teamId}`, {
    //         withArticles: true,
    //         options: 'paginate|type,videos',
    //         page: 1,
    //         per_page: 7
    //     });
    // }



}

import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LeagueService {

    constructor(
        private httpService: HttpService
    ) { }

    getLeaguesForTodayMatches(): Observable<any> {
        return this.httpService.get('leagues', {
            menu: 1,
            haveTodayMatches: 1
        });
    }

    getLeagueInfo(leagueId: number): Observable<any> {
        return this.httpService.get(`leagues/info/${leagueId}`);
    }

    getTopLeagues(isCup?: number): Observable<any> {
        let reqObj: any = { menu: 1 };
        if (isCup === 1 || isCup === 0) reqObj.is_cup = isCup;
        
        return this.httpService.get('leagues', reqObj);
    }

    searchLeagues(value: string, isCup?: number): Observable<any> {
        let reqObj: any = { search: value };
        if (isCup === 1 || isCup === 0) reqObj.is_cup = isCup;

        return this.httpService.get('leagues', reqObj);
    }

    getLeagueStandings(leagueId: number, seasonId: number): Observable<any> {
        return this.httpService.get(`standings/${leagueId}/${seasonId}`);
    }

    getLeagueStatistics(leagueId: number): Observable<any> {
        return this.httpService.get(`leagues/stats/${leagueId}`);
    }

    getLeagueMatches(leagueId: number, p: number): Observable<any> {
        return this.httpService.get(`leagues/matches/${leagueId}`, {
            order: 1,
            page: p
        });
    }

    getLeagueNews(leagueId: number, p: number): Observable<any> {
        return this.httpService.get(`leagues/articles/${leagueId}`, {
            options: 'paginate',
            per_page: 30,
            page: p
        });
    }

    getLeagueMatchesBySeasonAndRound(leagueId: number, seasonId: number, roundId: number): Observable<any[]> {
        return this.httpService.get(`leagues/matches_round/${leagueId}`, {
            round: roundId,
            season: seasonId
        });
    }

    getLeagueMatchesBySeasonAndStage(leagueId: number, seasonId: number, stageId: number, roundId: number): Observable<any[]> {
        return this.httpService.get(`leagues/matches_round/${leagueId}`, {
            stage: stageId,
            round: roundId,
            season: seasonId
        });
    }
    
    getLeagueRoundsBySeason(seasonId: number): Observable<any[]> {
        return this.httpService.get(`rounds/${seasonId}`);
    }
}

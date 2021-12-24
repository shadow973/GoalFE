import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LivescoreService {

    constructor(
        private httpService: HttpService
    ) { }

    getMatches(): Observable<any> {
        return this.httpService.get('matches');
    }

    getMatchesByLeagueId(id: number): Observable<any> {
        return this.httpService.get('matches', {
            //byleague: 1,
            league: id
        });
    }

    getFavoriteMatches(ids: number[]): Observable<any> {
        return this.httpService.get('matches', {
            match_ids: JSON.stringify(ids)
        });
    }

    getMatchById(id: number): Observable<any> {
        return this.httpService.get(`match/${id}`);
    }

    getAllLeaguesWithMatches(date: string, leagueId: number = 0, page: number, lastPage: number = page): Observable<any[]> {
        return this.httpService.get('matches', {
            byleague: 1,
            league: leagueId,
            date: date,
            per_page: 15,
            page: page,
            last_page: lastPage
        });
    }

    getAllLeaguesWithMatchesByMatches(leagueId: number = 0, page: number, lastPage: number = page, matchIds: number[]): Observable<any[]> {
        return this.httpService.get('matches', {
            byleague: 1,
            league: leagueId,
            per_page: 15,
            page: page,
            last_page: lastPage,
            match_ids: JSON.stringify(matchIds)
        });
    }

    getAllLeaguesWithLiveMatches(date: string, leagueId: number = 0, page: number, lastPage: number = page): Observable<any[]> {
        return this.httpService.get('live-matches', {
            byleague: 1,
            league: leagueId,
            date: date,
            per_page: 15,
            page: page,
            last_page: lastPage
        });
    }


    // MATCH PAGE
    getMatchInfo(id: number): Observable<any> {
        return this.httpService.get(`live-matches/info/${id}`);
    }

    getMatchHighlights(id: number): Observable<any> {
        return this.httpService.get(`live-matches/overview/${id}`);
    }

    getMatchStatistics(id: number): Observable<any> {
        return this.httpService.get(`live-matches/statistics/${id}`);
    }

    getMatchPlayers(id: number, partial: number = 0, withTop2Players = 0): Observable<any> {
        return this.httpService.get(`live-matches/players/${id}?partial=${partial}&with_top2_players=${withTop2Players}`);
    }

    getMatchVideoHighlights(id: number): Observable<any> {
        return this.httpService.get(`live-matches/highlights/${id}`);
    }

    getMatchStandings(id: number): Observable<any> {
        return this.httpService.get(`live-matches/standings/${id}`);
    }

    getMatchH2h(id: number, perPage: number): Observable<any> {
        return this.httpService.get(`live-matches/h2h/${id}?per_page=${perPage}`);
    }

    getMatchPlayerStats(id: number): Observable<any> {
        return this.httpService.get(`live-matches/player-stats/${id}`);
    }

    getTeamLeagues(id: number): Observable<any> {
        return this.httpService.get(`teams/leagues/${id}`);
    }

    rateMatch(matchId: number, ans: number): Observable<any> {
        return this.httpService.post(`matchrate/${matchId}`, {
            answer: ans
        });
    }
}

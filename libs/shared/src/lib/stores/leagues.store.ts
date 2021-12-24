import { tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { LeagueService } from './../services/league.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class LeagueStore {
    private _topLeagues$: BehaviorSubject<any> = new BehaviorSubject(null);
    private _topLeaguesStored: boolean;
    private _topLeaguesCups$: BehaviorSubject<any> = new BehaviorSubject(null);
    private _topLeaguesCupsStored: boolean;
    private _topLeaguesWithoutCups$: BehaviorSubject<any> = new BehaviorSubject(null);
    private _topLeaguesWithoutCupsStored: boolean;

    private _leagueStatistics$: BehaviorSubject<any> = new BehaviorSubject(null);
    private _leagueStatisticsStoredLeagueId: number;

    private _leagueStandings$: BehaviorSubject<any> = new BehaviorSubject(null);
    private _leagueStandingsStoredLeagueId: number;

    constructor(
        private leagueService: LeagueService
    ) { }

    getTopLeagues(includeCups: number): Observable<any> {
        if (includeCups == 1 || includeCups == 0) {
            if (includeCups == 1) {
                if (this._topLeaguesCupsStored) return this._topLeaguesCups$.asObservable();
                return this.leagueService.getTopLeagues(1)
                    .pipe(
                        tap((leagues) => {
                            this._topLeaguesCupsStored = true;
                            this._topLeaguesCups$.next(leagues);
                        })
                    );
            }
            else {
                if (this._topLeaguesWithoutCupsStored) return this._topLeaguesWithoutCups$.asObservable();
                return this.leagueService.getTopLeagues(0)
                    .pipe(
                        tap((leagues) => {
                            this._topLeaguesWithoutCupsStored = true;
                            this._topLeaguesWithoutCups$.next(leagues);
                        })
                    );
            }
        }
        else {
            if (this._topLeaguesStored) return this._topLeagues$.asObservable();
            return this.leagueService.getTopLeagues()
                .pipe(
                    tap((leagues) => {
                        this._topLeaguesStored = true;
                        this._topLeagues$.next(leagues);
                    })
                );
        }
    }


    getLeagueStatistics(leagueId: number): Observable<any> {
        if (this._leagueStatisticsStoredLeagueId == leagueId) return this._leagueStatistics$.asObservable();

        this._leagueStatisticsStoredLeagueId = leagueId
        return this.leagueService.getLeagueStatistics(leagueId)
            .pipe(
                tap((stats) => this._leagueStatistics$.next(stats))
            );
    }


    getLeagueStandings(leagueId: number, seasonId: number): Observable<any> {
        if (this._leagueStandingsStoredLeagueId == leagueId) return this._leagueStandings$.asObservable();

        this._leagueStandingsStoredLeagueId = leagueId
        return this.leagueService.getLeagueStandings(leagueId, seasonId)
            .pipe(
                tap((stats) => this._leagueStandings$.next(stats))
            );
    }

}

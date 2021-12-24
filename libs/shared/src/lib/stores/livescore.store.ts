import { switchMap } from 'rxjs/operators';
import { LivescoreService } from './../services/livescore.service';
import { BehaviorSubject, Observable, Subject, timer, Subscription } from 'rxjs';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class LivescoreStore {
    private _showFavorites$ = new BehaviorSubject(false);
    private _showLives$ = new BehaviorSubject(false);
    private _filterByLeague$ = new BehaviorSubject(null);
    private _date: string;
    private _pages: number[] = [];

    private updaterSub: Subscription;
    private _leagues$: BehaviorSubject<any[]> = new BehaviorSubject([]);
    private _playersToCompare$: BehaviorSubject<any[]> = new BehaviorSubject([]);
    private _resetPages$: Subject<any> = new Subject();
    private _loading$: Subject<boolean> = new Subject();
    private _loadingBottom$: Subject<boolean> = new Subject();
    private _favMatchIds: number[];
    private _goalAudio;

    private environment: any;

    constructor(
        private livescoreService: LivescoreService,
        @Inject('env') env: any,
        @Inject(PLATFORM_ID) private platformId: string
    ) {
        this.environment = env;
        if (isPlatformBrowser(this.platformId)) {
            this._goalAudio = new Audio();
        }
    }

    private initUpdater(scroll: boolean = false) {
        if (isPlatformServer(this.platformId)) {
            return;
        }

        if (this.updaterSub) this.updaterSub.unsubscribe();

        let leagueId = (this.filterByleague) ? this.filterByleague.league_id : 0;

        if (!scroll) {
            this._loading$.next(true);
        }
        if (scroll) {
            this._loadingBottom$.next(true);
        }

        this.updaterSub = timer(0, this.environment.livescore_refresh_seconds * 1000).pipe(
            switchMap(() => {
                if (this.showFavorites) {
                    return this.livescoreService.getAllLeaguesWithMatchesByMatches(
                        leagueId,
                        this._pages[0],
                        this._pages[this._pages.length - 1],
                        this._favMatchIds
                    );

                }
                if (this.showLives) {
                    return this.livescoreService.getAllLeaguesWithLiveMatches(
                        this._date,
                        leagueId,
                        this._pages[0],
                        this._pages[this._pages.length - 1]
                    );
                }
                else {
                    return this.livescoreService.getAllLeaguesWithMatches(
                        this._date,
                        leagueId,
                        this._pages[0],
                        this._pages[this._pages.length - 1]
                    );
                }
            })
        ).subscribe((d) => {
            this._loading$.next(false);
            this._loadingBottom$.next(false);
            this._leagues$.next(d);
        });

        this.loadGoalAudio();
    }

    private get showFavorites(): boolean {
        return this._showFavorites$.getValue();
    }

    showFavorites$(): Observable<boolean> {
        return this._showFavorites$.asObservable();
    }

    private get showLives(): boolean {
        return this._showLives$.getValue();
    }

    showLives$(): Observable<boolean> {
        return this._showLives$.asObservable();
    }

    private get filterByleague(): any {
        return this._filterByLeague$.getValue();
    }

    private filterByleague$(league: any): Observable<any> {
        return this._filterByLeague$.asObservable()
    }

    private get leagues(): any {
        return this._leagues$.getValue();
    }

    leagues$(): Observable<any> {
        return this._leagues$.asObservable()
    }

    private get playersToCompare(): any {
        return this._playersToCompare$.getValue();
    }

    playersToCompare$(): Observable<any> {
        return this._playersToCompare$.asObservable()
    }

    setPlayersToCompare(players) {
        this._playersToCompare$.next(players);
    }

    resetPages$(): Observable<any> {
        return this._resetPages$.asObservable()
    }

    loading$(): Observable<any> {
        return this._loading$.asObservable()
    }

    loadingBottom$(): Observable<any> {
        return this._loadingBottom$.asObservable()
    }

    toggleFavorites(isFav: boolean): void {
        this._showFavorites$.next(isFav);
        this.resetPages();
        this.initUpdater();
    }

    toggleLives(isLive: boolean): void {
        this._showLives$.next(isLive);
        this.resetPages();
        this.initUpdater();
    }

    setFilterByleague(league: any): void {
        this._filterByLeague$.next(league);
        this.resetPages();
        this.initUpdater();
    }

    setDate(dateStr: string): void {
        this._date = dateStr;
        this.resetPages();
        this.initUpdater();
    }

    addPage(page: number): void {
        this._pages.push(page);
        this.initUpdater(true);
    }

    setFavoriteMatchIds(ids: number[]) {
        this._favMatchIds = ids;
        this.resetPages();
        this.initUpdater();
    }

    private resetPages(): void {
        this._pages = [1];
        this._resetPages$.next(true);
    }

    private loadGoalAudio(): void {
        this._goalAudio.src = '../../../../assets/goal.mp3';
        this._goalAudio.muted = true;
        this._goalAudio.load();
    }

    changeGoalSound(mute: boolean) {
        this._goalAudio.muted = mute;
    }

    playGoalSound() {
        console.log('goal')
        this._goalAudio.play();
    }

}

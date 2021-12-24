import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class LocalStore {
    private _favoriteMatches$: BehaviorSubject<number[]> = new BehaviorSubject([]);
    private _favoriteClubs$: BehaviorSubject<any[]> = new BehaviorSubject([]);
    private _favorites$: BehaviorSubject<any[]> = new BehaviorSubject([]);


    constructor(
        @Inject(PLATFORM_ID) private platformId: string
    ) {
        let matchesStoredData = localStorage.getItem('goal-fav-matches');
        if (matchesStoredData) {
            this._favoriteMatches$.next(JSON.parse(matchesStoredData));
        }

        let clubsStoredData = localStorage.getItem('goal-fav-clubs');
        if (clubsStoredData) {
            this._favoriteClubs$.next(JSON.parse(clubsStoredData));
        }

        let favoritesStoredData = localStorage.getItem('goal-favorites');
        if (favoritesStoredData) {
            this._favorites$.next(JSON.parse(favoritesStoredData));
        }
        else {
            if (isPlatformServer(this.platformId)) return; 
            // Set default favorites
            let favoritesDefaultData = [
                { type: 'club', id: 18692, slug: 'georgia', name: 'საქართველო' },
                { type: 'club', id: 83, slug: 'barcelona', name: 'ბარსელონა' },
                { type: 'club', id: 3468, slug: 'real-madrid', name: 'რეალ მადრიდი' },
                { type: 'club', id: 503, slug: 'bayern-munchen', name: 'ბაიერნი' },
                { type: 'club', id: 625, slug: 'juventus', name: 'იუვენტუსი' },
                { type: 'club', id: 14, slug: 'manchester-united', name: 'მანჩესტერ იუნაიტედი' },
            ];
            localStorage.setItem('goal-favorites', JSON.stringify(favoritesDefaultData));
            this._favorites$.next(favoritesDefaultData);
        }
    }


    //Match
    get _favoriteMatches(): number[] {
        return this._favoriteMatches$.getValue();
    }

    favoriteMatches$(): Observable<number[]> {
        return this._favoriteMatches$.asObservable();
    }

    toggleFavMatch(matchId: number) {
        let favMatches = this._favoriteMatches;
        if (favMatches.length && favMatches.find(m => m == matchId)) {
            favMatches = favMatches.filter(m => m != matchId);
        }
        else {
            favMatches.push(matchId);
        }
        this._favoriteMatches$.next(favMatches);
        localStorage.setItem('goal-fav-matches', JSON.stringify(favMatches));
    }

    removeMatchFromFavorites(matchId: number) {
        let favMatches = this._favoriteMatches;
        favMatches = favMatches.filter(m => m != matchId);
        this._favoriteMatches$.next(favMatches);
        localStorage.setItem('goal-fav-matches', JSON.stringify(favMatches));
    }

    addMatchToFavorites(matchId: number) {
        let favMatches = this._favoriteMatches;
        favMatches.push(matchId);
        this._favoriteMatches$.next(favMatches);
        localStorage.setItem('goal-fav-matches', JSON.stringify(favMatches));
    }

    //Clubs
    get _favoriteClubs(): any[] {
        return this._favoriteClubs$.getValue();
    }

    favoriteClubs$(): Observable<any[]> {
        return this._favoriteClubs$.asObservable();
    }

    toggleFavClub(clubId: number, clubName: string) {
        let favClubs = this._favoriteClubs;
        if (favClubs.length && favClubs.find(m => m.id == clubId)) {
            favClubs = favClubs.filter(m => m.id != clubId);
        }
        else {
            favClubs.push({
                id: clubId,
                name: clubName
            });
        }
        this._favoriteClubs$.next(favClubs);
        localStorage.setItem('goal-fav-clubs', JSON.stringify(favClubs));
    }

    //Clubs
    get _favorites(): any[] {
        return this._favorites$.getValue();
    }

    favorites$(): Observable<any[]> {
        return this._favorites$.asObservable();
    }

    toggleFavorites(type: string, itemId: number, slug: string, name: string, extraParam?: any) {
        let favorites = this._favorites;
        if (favorites.length && favorites.find(f => f.id == itemId)) {
            favorites = favorites.filter(f => f.id != itemId);
        }
        else {
            let obj: any = {
                type: type,
                id: itemId,
                slug: slug,
                name: name
            }
            if (extraParam) {
                obj.extraParam = extraParam;
            }
            favorites.push(obj);
        }
        this._favorites$.next(favorites);
        localStorage.setItem('goal-favorites', JSON.stringify(favorites));
    }

}

import { CookieService } from './../services/cookie.service';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { SocialAuthService } from 'angularx-social-login';

@Injectable({
    providedIn: 'root'
})

export class UserStore {
    private _userLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(null);
    private _userData: any;

    constructor(
        private cookieService: CookieService,
        private socialAuthService: SocialAuthService
    ) {}

    setUserLogin(status: boolean) {
        this._userLoggedIn$.next(status);
    }

    userLoggedIn$(): Observable<boolean> {
        return this._userLoggedIn$.asObservable();
    }

    get userLoggedIn(): boolean {
        return this._userLoggedIn$.getValue();
    }

    setUserData(user: any) {
        this._userData = user;
    }

    get userData(): any {
        return this._userData;
    }

    logout(): void {
        this.socialAuthService.signOut();
        this.cookieService.deleteCookie('x_key');
        this.setUserLogin(false);
        this.setUserData(null);
    }

}

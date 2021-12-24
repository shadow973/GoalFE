import { SocialAuthService } from 'angularx-social-login';
import { UserStore } from './../stores/user.store';
import { CookieService } from './cookie.service';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { catchError, map, switchMap, window } from 'rxjs/operators';
import { of, Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class UserService {

  public userLoggedIn: Subject<number> = new Subject();

    constructor(
        private httpService: HttpService,
        private cookieService: CookieService,
        private userStore: UserStore
    ) {}

    checkauthAPI() {
        let token = this.cookieService.getCookie('x_key');
        if (token) {
            this.httpService.get(`users/me?token=${token}`).subscribe(
                data => {
                    this.checkTokenResult(data);
                },
                error => console.log(error),
            );
        } else {
            this.userStore.setUserLogin(false);
        }
    }

    setAuthFacebook(token: string) {
        this.httpService.get(`socialauth/facebook?token=${token}`).subscribe(
            data => {
                this.setAuth(data);
                this.checkTokenResult(data.user);
            },
            error => console.log(error),
        );
    }

    userLogin(user: string, passwd: string) {
        return this.httpService.post('login/jwt', {
            email: user,
            password: passwd
        }).pipe(
            switchMap((res) => {
                this.userLoggedIn.next(res.user.id);
                this.setAuth(res);
                this.checkTokenResult(res.user);
                return of(null);
            }),
            catchError((err) => {
                return of(err.error.error);
            })
        );
    }

    registerUser(mail: string, user: string, passwd: string, confirmPasswd) {
        return this.httpService.post('register?locale=ka', {
            email: mail,
            username: user,
            password: passwd,
            confirm_password: confirmPasswd
        }).pipe(
            switchMap((res) => {
                this.userLogin(user, passwd);
                return of(null);
            }),
            catchError((err) => {
                return of(err.error);
            })
        );
    }

    private setAuth(res: any) {
        this.cookieService.setCookie('x_key', res.token, 1);
    }

    private checkTokenResult(checkTokerRes: any) {
        this.userStore.setUserData(checkTokerRes);
        if (typeof checkTokerRes.id !== 'undefined') {
            if (checkTokerRes.id > 0) {
                this.userStore.setUserLogin(true);
            }
        }
    }

    getUserComments(userId: number): Observable<any> {
        return this.httpService.get(`users/${userId}/comments`);
    }

    updateUserProfile(user: any) {
        return this.httpService.post('users/update?locale=ka', user);
    }

}

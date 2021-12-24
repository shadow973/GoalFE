import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root',
})
export class CookieService {

    constructor(
        @Inject(PLATFORM_ID) private platformId: any
    ) { }


    getCookie(name: any): string {
        if (isPlatformBrowser(this.platformId)) {
            const ca: Array<string> = document.cookie.split(';');
            const caLen: number = ca.length;
            const cookieName = `${name}=`;
            let c: string;

            for (let i = 0; i < caLen; i += 1) {
                c = ca[i].replace(/^\s+/g, '');
                if (c.indexOf(cookieName) === 0) {
                    return c.substring(cookieName.length, c.length);
                }
            }
        }
        return '';
    }

    deleteCookie(name): void {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    setCookie(name: string, value: string, expireDays: number, path: string = ''): void {
        if (isPlatformBrowser(this.platformId)) {
            const d: Date = new Date();
            d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
            const expires = `expires=${d.toUTCString()}`;
            const cpath = path ? `; path=${path}` : '';
            document.cookie = `${name}=${value}; ${expires}${cpath}`;
        }
    }

}

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CommentsStore {
    private _closeForms$ = new Subject();

    closeForms() {
        this._closeForms$.next();
    }

    get closeForms$(): Observable<any> {
        return this._closeForms$.asObservable();
    }
}

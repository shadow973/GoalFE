import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PromotionService {

    constructor(
        private httpService: HttpService
    ) { }

    getPromotions(): Observable<any[]> {
        return this.httpService.get('promotions');
    }
}

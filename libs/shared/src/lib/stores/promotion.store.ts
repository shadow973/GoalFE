import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { PromotionService } from './../services/promotion.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class PromotionStore {
    private _promotions: any[];
    private _loaded$: BehaviorSubject<boolean> = new BehaviorSubject(null);

    constructor(
        private promotionService: PromotionService
    ) { }

    init() {
        this.promotionService.getPromotions().subscribe((p) => {
            this._promotions = p;
            this._loaded$.next(true);
        });
    }

    get loaded(): Observable<boolean>{
        return this._loaded$.asObservable();
    }

    getPromotionByPositionId(id: number): any {
        return this._promotions.find(p => p.position_id == id);
    }
}

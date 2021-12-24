/* eslint-disable @angular-eslint/component-class-suffix */
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { OnInit, Component, OnDestroy } from '@angular/core';
import { PromotionStore } from '@goal-front/shared';
import { SafePipe } from 'libs/shared/src/lib/pipes/safe.pipe';

@Component({
  template: ''
})
export abstract class Promotion implements OnInit, OnDestroy {
  private routerSub: Subscription;
  private promotionsLoaded: boolean;

  public id: number;
  public iframe: any;
  public hidden: boolean;

  constructor(
    private promotionStore: PromotionStore,
    private router: Router,
    private safePipe: SafePipe
  ) { }

  ngOnInit(): void {
    this.promotionStore.loaded.subscribe((loaded) => {
      this.promotionsLoaded = loaded;
      if (loaded) {
        this.iframe = this.getPromotionFrame();
      }
    });

    this.routerSub = this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        if (this.promotionsLoaded) {
          this.iframe = this.getPromotionFrame();
        }
        this.hidden = false;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routerSub) this.routerSub.unsubscribe();
  }

  private getPromotionFrame() {
    let p = this.promotionStore.getPromotionByPositionId(this.id);
    if (p) {
      return this.safePipe.transform(p.iframe, 'html');
    }
  }

}

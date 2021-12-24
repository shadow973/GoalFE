import { DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, ElementRef, Inject, Injector, PLATFORM_ID, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PromotionStore, UserService } from '@goal-front/shared';
import { Subscription } from 'rxjs';
import { NavbarStore } from './stores/navbar.store';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Goal.ge';
  menuOpen: boolean;
  burgerSub: Subscription;

  constructor(
    private promotionStore: PromotionStore,
    private navbarStore: NavbarStore,
    @Inject(PLATFORM_ID) private platformId: string,
    @Inject(DOCUMENT) private dom,
    private injector: Injector,
    private router: Router,
    private userService: UserService 
  ) {
    this.setHeadLink();
    if (isPlatformBrowser(this.platformId)) {
      this.initGtag();
      this.promotionStore.init();
      this.userService.checkauthAPI();
    }

    this.createMobileBurgerSub();
  }

  private createMobileBurgerSub(): void {
    this.burgerSub = this.navbarStore.mobileMenuOpen$.subscribe((open) => {
      this.menuOpen = open;
    });
  }

  toggleMobileNavbar() {
    this.navbarStore.toggleBurger();
  }

  private initGtag() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'UA-47112098-1', {
          'path': event.url
        });
      }
    });
  }

  private setHeadLink() {
    let url = window.location.pathname;
    if (isPlatformServer(this.platformId)) {
      let req = this.injector.get('request');
      url = req.originalUrl;
    }

    const head = this.dom.getElementsByTagName('head')[0];
    var element: HTMLLinkElement = this.dom.querySelector(`link[rel='canonical']`) || null
    if (element == null) {
      element = this.dom.createElement('link') as HTMLLinkElement;
      head.appendChild(element);
    }
    element.setAttribute('rel', 'canonical')
    element.setAttribute('href', `https://goal.ge${url}`);
  }

}

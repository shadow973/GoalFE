import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NavbarStore } from '../../../stores/navbar.store';
import { environment } from 'apps/mobile/src/environments/environment';

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileNavbarComponent implements OnInit {

  navbarItems: any[];
  private menuSub: Subscription;
  menuOpen: boolean;
  visibleChildCatsIndex: number = -1;
  private routerSub: Subscription;

  constructor(
    private navbarStore: NavbarStore,
    private cd: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.navbarItems = this.navbarStore.getMobileNavbarItems();
    this.menuSub = this.navbarStore.mobileMenuOpen$.subscribe((open) => {
      this.menuOpen = open;
      this.cd.markForCheck();
    });

    //router navigated
    this.routerSub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.navbarStore.closeBurger();
      }
    });
  }

  ngOnDestroy(): void {
    this.menuSub.unsubscribe();
    this.routerSub.unsubscribe();
  }

  imageLinkGenerator(id): string {
    return `${environment.storage}/size/timthumb.php?src=/images/teams/${id}.png&w=48`;
  }

  imageLinkGeneratorCountry(id): string {
    if (id.includes('.svg')) return `${environment.storage}/images/countries/flags/${id}`;
    return `${environment.storage}/size/timthumb.php?src=/images/countries/flags/${id}&w=48`;
  }

  openChildCats(index: number, e: Event) {
    e.stopPropagation();
    e.preventDefault();

    if (this.visibleChildCatsIndex == index) {
      this.visibleChildCatsIndex = -1;
    }
    else {
      this.visibleChildCatsIndex = index;
    }
    this.cd.markForCheck();
  }
}

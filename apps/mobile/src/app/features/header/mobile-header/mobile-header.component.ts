import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserStore } from '@goal-front/shared';
import { environment } from 'apps/mobile/src/environments/environment';
import { Subscription } from 'rxjs';
import { skip } from 'rxjs/operators';
import { ModalService } from '../../../services/modal.service';
import { NavbarStore } from '../../../stores/navbar.store';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileHeaderComponent implements OnInit {
  userLoggedIn: boolean;
  user: any;
  private userSub: Subscription;
  //private scrolledSub: Subscription;
  scrolled: boolean;

  private burgerSub: Subscription;
  menuOpen: boolean;
  searchOpen: boolean;

  constructor(
    private modalService: ModalService,
    private userStore: UserStore,
    private navbarStore: NavbarStore,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.userSub = this.userStore.userLoggedIn$()
      .pipe(skip(1))
      .subscribe((logged) => {
        this.userLoggedIn = logged;
        if (logged) {
          this.user = this.userStore.userData;
        }
        this.cd.markForCheck()
      });

    // this.responsiveStore.initScrollListener();
    // this.scrolledSub = this.responsiveStore.isScrolled$().subscribe((s) => {
    //   this.scrolled = s;
    //   this.cd.markForCheck();
    // });

    this.burgerSub = this.navbarStore.mobileMenuOpen$.subscribe((open) => {
      this.menuOpen = open;
      this.cd.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
    this.burgerSub.unsubscribe();
    //this.scrolledSub.unsubscribe();
  }

  auth(): void {
    this.modalService.openLoginModal().afterClosed().subscribe();
  }

  logout(): void {
    this.userStore.logout();
    window.location.reload();
  }

  getAvatar(image): string {
    var imagelength = image.search('facebook');
    // console.log
    if (imagelength > -1) {
      return image;
    } else {
      return `${environment.storage}/${image}`;
    }
  }

  toggleSearch(open: boolean): void {
    this.searchOpen = open;
  }

  toggleMenu() {
    this.navbarStore.toggleBurger();
  }
}

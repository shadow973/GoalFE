import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { LocalStore } from '@goal-front/shared';
import { environment } from 'apps/mobile/src/environments/environment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-favorite-modal',
  templateUrl: './user-favorite-modal.component.html',
  styleUrls: ['./user-favorite-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFavoriteModalComponent implements OnInit {
  loading: boolean;
  searchItems: any;
  private favoritesSub: Subscription;
  favorites: any[];
  routerSub: Subscription;

  get favoriteClubs() {
    return this.favorites.filter((f) => f.type == 'club');
  }

  get favoriteLeagues() {
    return this.favorites.filter((f) => f.type == 'championship');
  }

  get favoritePlayers() {
    return this.favorites.filter((f) => f.type == 'player');
  }

  constructor(
    private localStore: LocalStore,
    private cd: ChangeDetectorRef,
    private router: Router,
    private matDialogRef: MatDialogRef<UserFavoriteModalComponent>
  ) { }

  ngOnInit(): void {
    this.favoritesSub = this.localStore.favorites$().subscribe((favs) => {
      this.favorites = favs;
      this.cd.markForCheck();
    });

    //router navigated
    this.routerSub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.matDialogRef.close();
      }
    });
  }

  ngOnDestroy() {
    this.favoritesSub.unsubscribe();
    this.routerSub.unsubscribe();
  }

  isSubscribed(itemId: number) {
    return !!(this.favorites.find(f => f.id == itemId));
  }

  toggleSubscribe(e: Event, type: string, itemId: number, slug: string, name: string, extraParam?: any) {
    e.preventDefault();
    e.stopPropagation();
    this.localStore.toggleFavorites(type, itemId, slug, name, extraParam);
  }

  trackById(index: number, item: any) {
    return item.id;
  }

  imageLinkGeneratorClub(id): string {
    return `${environment.storage}/size/timthumb.php?src=/images/teams/${id}.png&w=48`;
  }

  imageLinkGeneratorChampionship(id): string {
    return `${environment.storage}/size/timthumb.php?src=/images/countries/flags/${id}.png&w=48`;
  }

  imageLinkGeneratorPlayer(id): string {
    return `${environment.storage}/size/timthumb.php?src=${id}&w=48`;
  }
}

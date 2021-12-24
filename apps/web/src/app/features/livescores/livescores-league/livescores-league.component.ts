import { Subscription } from 'rxjs';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { LocalStore } from '@goal-front/shared';
import { environment } from 'apps/web/src/environments/environment';


@Component({
  selector: 'app-livescores-league',
  templateUrl: './livescores-league.component.html',
  styleUrls: ['./livescores-league.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LivescoresLeagueComponent implements OnInit {
  @Input() league: any;
  favorite: boolean;
  private matchIds = [];
  private favSub: Subscription;
  @Input() contentVisible = true;

  constructor(
    private localStore: LocalStore,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    if (this.league && this.league.data) {
      this.league.data.forEach(match => {
        this.matchIds.push(match.match_id);
      });
    }

    this.favSub = this.localStore.favoriteMatches$().subscribe((fms) => {
      this.favorite = this.matchIds.every(mId => fms.includes(mId));
      this.cd.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.favSub.unsubscribe();
  }

  toggleFavLeague(e: Event): void {
    e.preventDefault();
    e.stopPropagation();

    if (!this.favorite) {
      this.matchIds.forEach(mId => {
        this.localStore.addMatchToFavorites(mId);
      });
    }
    else {
      this.matchIds.forEach(mId => {
        this.localStore.removeMatchFromFavorites(mId);
      });
    }
  }

  toggleContent() {
    this.contentVisible = !this.contentVisible;
  }

  trackById(index: number, item: any) {
    return item.match_id;
  }

  imageLinkGenerator(id): string {
    return `${environment.storage}/images/countries/flags/${id}.svg`;
  }
}


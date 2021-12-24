import { Subscription } from 'rxjs';
import { environment } from './../../../../environments/environment.prod';
import { ChangeDetectionStrategy, Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { LocalStore } from '@goal-front/shared';

@Component({
  selector: 'app-today-match',
  templateUrl: './today-match.component.html',
  styleUrls: ['./today-match.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodayMatchComponent implements OnInit {
  @Input() match: any;
  favoriteMatches = [];
  private favMatchesSub: Subscription;

  constructor(
    private localStore: LocalStore,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.favMatchesSub = this.localStore.favoriteMatches$().subscribe((d) => {
      this.favoriteMatches = d;
      this.cd.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.favMatchesSub.unsubscribe();
  }

  toggleFavMatch(e: Event, matchId: number) {
    e.stopPropagation();
    e.preventDefault();
    this.localStore.toggleFavMatch(matchId);
  }

  isMatchFavorite(matchId: number) {
    return !!(this.favoriteMatches.find(m => m == matchId));
  }

  imageLinkGeneratorTeam(id) {
    return `${environment.storage}/size/timthumb.php?src=/images/teams/${id}.png&w=32`;
  }


}

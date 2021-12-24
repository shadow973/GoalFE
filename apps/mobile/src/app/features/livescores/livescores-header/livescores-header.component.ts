import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { LivescoreStore } from '@goal-front/shared';
import { LocalStore } from '@goal-front/shared';
import { LivescoreLeagueSelectComponent } from '../livescore-league-select/livescore-league-select.component';

@Component({
  selector: 'app-livescores-header',
  templateUrl: './livescores-header.component.html',
  styleUrls: ['./livescores-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LivescoresHeaderComponent implements OnInit {
  tabIndex: number = 0;
  favCount: number;
  private favMatchIds: number[];
  @ViewChild('leagueSelect', { static: true }) leagueSelect: LivescoreLeagueSelectComponent;

  constructor(
    private livescoreStore: LivescoreStore,
    private localStore: LocalStore,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.localStore.favoriteMatches$().subscribe((m) => {
      this.favMatchIds = m;
      this.favCount = m.length || 0;
      if (this.tabIndex == 1) {
        this.livescoreStore.setFavoriteMatchIds(this.favMatchIds);
      }
      this.cd.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.changeTab(0);
  }

  changeTab(index) {
    if (this.tabIndex == index) return;
    this.tabIndex = index;

    let isLive = (index == 1);
    let isFav = (index == 2);
    
    if (this.tabIndex == 2) {
      this.livescoreStore.setFavoriteMatchIds(this.favMatchIds);
    }
    
    this.leagueSelect.select(0);
    this.livescoreStore.toggleFavorites(isFav);
    this.livescoreStore.toggleLives(isLive);
  }

  changeLeague(league: any) {
    this.livescoreStore.setFilterByleague(league);
  }

}

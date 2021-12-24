import { Subscription } from 'rxjs';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { LeagueService } from '@goal-front/shared';
import { LivescoreService } from '@goal-front/shared';
import { LocalStore } from '@goal-front/shared';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-today-matches',
  templateUrl: './today-matches.component.html',
  styleUrls: ['./today-matches.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodayMatchesComponent implements OnInit {
  leagues: any[];
  swipeConfig: any;
  matches: any[];
  activeLeagueId: number;
  loading: boolean;
  leaguesLoading: boolean;
  private favMatchSub: Subscription;
  favMatchIds: number[];
  @ViewChild('tabs', { static: false }) tabs: ElementRef<HTMLElement>;
  domLoaded: boolean;

  constructor(
    private leaguesService: LeagueService,
    private livescoreService: LivescoreService,
    private cd: ChangeDetectorRef,
    private localStore: LocalStore,
    @Inject(PLATFORM_ID) private platformId: string
  ) { }

  ngOnInit(): void {
    this.swipeConfig = {
      direction: 'horizontal',
      initialSlide: 0,
      updateOnWindowResize: true,
      preloadImages: false,
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        375: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        993: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        1441: {
          slidesPerView: 6,
          spaceBetween: 30
        }
      }
    };

    this.getLeagues();

    this.favMatchSub = this.localStore.favoriteMatches$().subscribe((d) => {
      this.favMatchIds = d;
      if (this.activeLeagueId == -1) {
        this.getFavoriteMatches();
      }
    });

    if (isPlatformBrowser(this.platformId)) {
      this.domLoaded = true;
    }
  }
  
  ngOnDestroy(): void {
    if (this.favMatchSub) {
      this.favMatchSub.unsubscribe();
    }
  }

  private getLeagues(): void {
    this.leaguesLoading = true;
    this.cd.markForCheck();
    this.leaguesService.getLeaguesForTodayMatches().subscribe((leagues: any) => {
      if (!leagues.data) return;
      this.leaguesLoading = false;
      this.leagues = leagues.data;
      this.cd.detectChanges();
    });
  }

  getMatchesByLeagueId(id: number): void {
    this.loading = true;
    this.activeLeagueId = id;
    this.cd.markForCheck();
    this.livescoreService.getMatchesByLeagueId(id).subscribe((d: any) => {
      this.loading = false;
      if (!d) return;
      this.matches = d;
      this.cd.markForCheck();
    });
  }

  getFavoriteMatches() {
    this.activeLeagueId = -1;
    this.loading = true;
    this.cd.markForCheck();
    this.livescoreService.getFavoriteMatches(this.favMatchIds).subscribe((d: any) => {
      this.loading = false;
      if (!d) return;
      this.matches = d;
      this.cd.markForCheck();
    });
  }

  trackByMatchId(index: number, item: any) {
    return item.match_id;
  }

}

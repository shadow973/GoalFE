import { isPlatformBrowser } from '@angular/common';
import { Component, Input, OnInit, EventEmitter, Output, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, Inject, PLATFORM_ID } from '@angular/core';
import { environment } from 'apps/web/src/environments/environment';
import { EventReplayer } from 'preboot';

@Component({
  selector: 'app-today-matches-header',
  templateUrl: './today-matches-header.component.html',
  styleUrls: ['./today-matches-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodayMatchesHeaderComponent implements OnInit {
  swipeConfig: any;
  activeSlideIndex = 0;
  activeLeagueId: number;
  @Input() leagues: any[];
  @Output() favoritesSelected = new EventEmitter();
  @Output() leagueSelected = new EventEmitter();
  @ViewChild('swiper', { static: true }) swiperEl: any;
  domLoaded: boolean;

  constructor(
    private cd: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: string,
    private eventReplayer: EventReplayer
  ) { }

  ngOnInit(): void {
    if (this.leagues && this.leagues.length) {
      this.selectleague(this.leagues[0].league_id);
    }
    else {
      this.ShowFavMatches();
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.swipeConfig = {
        direction: 'horizontal',
        initialSlide: 0,
        updateOnWindowResize: true,
        preloadImages: false,
        slidesPerView: 'auto'
      };
      this.domLoaded = true;
      this.eventReplayer.replayAll();
      this.cd.markForCheck();
    }
  }

  slideTabs(next: boolean): void {
    if (!next) {
      this.swiperEl.directiveRef.swiper().slideNext();
    }
    else {
      this.swiperEl.directiveRef.swiper().slidePrev();
    }
  }

  selectleague(leagueId: number) {
    this.activeLeagueId = leagueId;
    this.leagueSelected.emit(leagueId);
    this.cd.markForCheck();
  }

  ShowFavMatches(): void {
    this.activeLeagueId = -1;
    this.favoritesSelected.emit();
  }

  imageLinkGeneratorCountry(id): string {
    return `${environment.storage}/images/countries/flags/${id}.svg`;
  }

  trackByLeagueId(index: number, item: any) {
    return item.league_id;
  }
}

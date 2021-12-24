import { isPlatformBrowser } from '@angular/common';
import { Component, Input, OnInit, EventEmitter, Output, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, PLATFORM_ID, Inject, getPlatform, AfterViewInit } from '@angular/core';
import { environment } from 'apps/web/src/environments/environment';

@Component({
  selector: 'app-today-matches-header',
  templateUrl: './today-matches-header.component.html',
  styleUrls: ['./today-matches-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodayMatchesHeaderComponent implements OnInit, AfterViewInit {
  swipeConfig: any;
  activeSlideIndex = 0;
  activeLeagueId: number;
  domLoaded: boolean;
  @Input() leagues: any[];
  @Output() favoritesSelected = new EventEmitter();
  @Output() leagueSelected = new EventEmitter();

  constructor(
    private cd: ChangeDetectorRef
  ) { }

  ngAfterViewInit(): void {
    //SSR Swiper Issues
    this.swipeConfig = {
      direction: 'horizontal',
      initialSlide: 0,
      updateOnWindowResize: true,
      preloadImages: false,
      slidesPerView: 'auto'
    };
    //this.eventReplayer.replayAll();
    this.domLoaded = true;
    this.cd.markForCheck();
  }

  ngOnInit(): void {
    if (this.leagues && this.leagues.length) {
      this.selectleague(this.leagues[0].league_id);
    }
    else {
      this.ShowFavMatches();
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

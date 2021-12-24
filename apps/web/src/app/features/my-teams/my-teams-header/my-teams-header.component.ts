import { Subscription } from 'rxjs';
import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { LocalStore } from '@goal-front/shared';
import { isPlatformBrowser } from '@angular/common';
import { EventReplayer } from 'preboot';

@Component({
  selector: 'app-my-teams-header',
  templateUrl: './my-teams-header.component.html',
  styleUrls: ['./my-teams-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyTeamsHeaderComponent implements OnInit {
  favoriteClubs: any[];
  favClubsSub: Subscription;
  activeTeamId: number;
  @Output() teamChoosed = new EventEmitter();

  activeSlideIndex = 0;
  swipeConfig: any;
  @ViewChild('swiper', { static: true }) swiperEl: any;
  loadSwiper: boolean;

  constructor(
    private localStore: LocalStore,
    @Inject(PLATFORM_ID) private platformId: string,
    private eventReplayer: EventReplayer
  ) { }

  ngOnInit(): void {
    this.swipeConfig = {
      direction: 'horizontal',
      initialSlide: 0,
      updateOnWindowResize: true,
      preloadImages: false,
      slidesPerView: 'auto',
      spaceBetween: 6,
    };

    this.favClubsSub = this.localStore.favoriteClubs$().subscribe((d) => {
      this.favoriteClubs = d;
      let findActiveTeam = !!(this.favoriteClubs.find(c => c.id == this.activeTeamId))
      if (this.favoriteClubs && this.favoriteClubs.length) {
        if (!this.activeTeamId || !findActiveTeam) {
          this.chooseTeam(this.favoriteClubs[0]);
        }
      }
      else {
        this.chooseTeam(null);
      }
    });
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.loadSwiper = true;
      this.eventReplayer.replayAll();
    }
  }

  ngOnDestroy(): void {
    this.favClubsSub.unsubscribe();
  }

  chooseTeam(team: any) {
    this.activeTeamId = team?.id;
    this.teamChoosed.emit(team)
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}

import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodayMatchesComponent } from './today-matches/today-matches.component';
import { SwiperConfigInterface, SwiperModule, SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { TodayMatchComponent } from './today-match/today-match.component';
import { TodayMatchesHeaderComponent } from './today-matches-header/today-matches-header.component';
import { TeamMatchComponent } from './team-match/team-match.component';
import { SharedModule } from '@goal-front/shared';
import { CoreModule } from '@goal-front/core';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};


@NgModule({
  declarations: [
    TodayMatchesComponent,
    TodayMatchComponent,
    TodayMatchesHeaderComponent,
    TeamMatchComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    SharedModule,
    CoreModule,
    RouterModule,
  ],
  exports: [
    TodayMatchesComponent,
    TodayMatchComponent,
    TeamMatchComponent
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class TodayMatchesModule { }

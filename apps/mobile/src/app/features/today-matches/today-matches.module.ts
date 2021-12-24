import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodayMatchesComponent } from './today-matches/today-matches.component';
import { SwiperConfigInterface, SwiperModule, SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { TodayMatchComponent } from './today-match/today-match.component';
import { TodayMatchesHeaderComponent } from './today-matches-header/today-matches-header.component';
import { MatRippleModule } from '@angular/material/core';
import { SharedModule } from '@goal-front/shared';
import { CoreModule } from '@goal-front/core';
import { MatSelectModule } from '@angular/material/select';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};


@NgModule({
  declarations: [
    TodayMatchesComponent,
    TodayMatchComponent,
    TodayMatchesHeaderComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    SharedModule,
    CoreModule,
    RouterModule,
    MatRippleModule,
    MatSelectModule
  ],
  exports: [
    TodayMatchesComponent,
    TodayMatchComponent
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class TodayMatchesModule { }

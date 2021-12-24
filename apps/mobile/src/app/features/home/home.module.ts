import { MainNewsModule } from './../main-news/main-news.module';
import { TodayMatchesModule } from './../today-matches/today-matches.module';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MatRippleModule } from '@angular/material/core';
import { SharedModule } from '@goal-front/shared';
import { PromotionModule } from '@goal-front/promotion';
import { CoreModule } from '@goal-front/core';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { LatestNewsModule } from '../latest-news/latest-news.module';
import { SwiperConfigInterface, SwiperModule } from 'ngx-swiper-wrapper';
import { UserFavoritesModule } from '../user-favorites/user-favorites.module';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 1
};

@NgModule({
  declarations: [
    HomeComponent,
    HomeSliderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    TodayMatchesModule,
    MainNewsModule,
    MatRippleModule,
    PromotionModule,
    CoreModule,
    LatestNewsModule,
    SwiperModule,
    UserFavoritesModule
  ]
})
export class HomeModule { }

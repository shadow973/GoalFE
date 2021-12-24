import { MainNewsModule } from './../main-news/main-news.module';
import { SidebarModule } from './../sidebar/sidebar.module';
import { TodayMatchesModule } from './../today-matches/today-matches.module';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeMainNewsComponent } from './home-main-news/home-main-news.component';
import { SharedModule } from '@goal-front/shared';
import { PromotionModule } from '@goal-front/promotion';
import { CoreModule } from '@goal-front/core';

@NgModule({
  declarations: [
    HomeComponent,
    HomeMainNewsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    TodayMatchesModule,
    MainNewsModule,
    SidebarModule,
    PromotionModule,
    CoreModule
  ]
})
export class HomeModule { }

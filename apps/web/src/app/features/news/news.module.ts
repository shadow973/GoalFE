import { TodayMatchesModule } from './../today-matches/today-matches.module';
import { MainNewsModule } from './../main-news/main-news.module';
import { SidebarModule } from './../sidebar/sidebar.module';
import { NewsRoutingModule } from './news-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { SharedModule } from '@goal-front/shared';
import { CoreModule, ShareSocialsModule } from '@goal-front/core';
import { PromotionModule } from '@goal-front/promotion';
import { CommentsModule } from '@goal-front/comments';



@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    SidebarModule,
    SharedModule,
    MainNewsModule,
    CoreModule,
    PromotionModule,
    TodayMatchesModule,
    ShareSocialsModule,
    CommentsModule
  ]
})
export class NewsModule { }

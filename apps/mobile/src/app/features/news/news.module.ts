import { MainNewsModule } from './../main-news/main-news.module';
import { NewsRoutingModule } from './news-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { MatRippleModule } from '@angular/material/core';
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
    SharedModule,
    MainNewsModule,
    CoreModule,
    MatRippleModule,
    PromotionModule,
    ShareSocialsModule,
    CommentsModule
  ]
})
export class NewsModule { }

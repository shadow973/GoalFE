import { RouterModule } from '@angular/router';
import { MainNewsItemComponent } from './main-news-item/main-news-item.component';
import { MainNewsComponent } from './main-news/main-news.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MainNewsPaginationComponent } from './main-news-pagination/main-news-pagination.component';
import { SharedModule } from '@goal-front/shared';
import { CoreModule } from '@goal-front/core';
import { PromotionModule } from '@goal-front/promotion';



@NgModule({
  declarations: [
    MainNewsComponent,
    MainNewsItemComponent,
    MainNewsPaginationComponent
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    SharedModule,
    CoreModule,
    PromotionModule,
    RouterModule
  ],
  exports: [
    MainNewsComponent,
    MainNewsPaginationComponent,
    MainNewsItemComponent
  ]
})
export class MainNewsModule { }

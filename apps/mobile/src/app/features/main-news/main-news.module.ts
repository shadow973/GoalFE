import { RouterModule } from '@angular/router';
import { MainNewsItemComponent } from './main-news-item/main-news-item.component';
import { MainNewsComponent } from './main-news/main-news.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MainNewsPaginationComponent } from './main-news-pagination/main-news-pagination.component';
import { MatRippleModule } from '@angular/material/core';
import { SharedModule } from '@goal-front/shared';
import { CoreModule } from '@goal-front/core';
import { PromotionModule } from '@goal-front/promotion';
import { DeferLoadModule } from '@trademe/ng-defer-load';
import { GetVideoPipe } from './main-news-item/get-video.pipe';
import { SharedComponentsModule } from '../../shared-components/shared-components.module';



@NgModule({
  declarations: [
    MainNewsComponent,
    MainNewsItemComponent,
    MainNewsPaginationComponent,
    GetVideoPipe
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    SharedModule,
    CoreModule,
    RouterModule,
    MatRippleModule,
    PromotionModule,
    DeferLoadModule,
    SharedComponentsModule
  ],
  exports: [
    MainNewsComponent,
    MainNewsPaginationComponent,
    MainNewsItemComponent,
    GetVideoPipe
  ]
})
export class MainNewsModule { }

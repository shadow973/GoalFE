import { SwiperConfigInterface, SwiperModule, SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { MainNewsModule } from './../main-news/main-news.module';
import { FormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTeamsComponent } from './my-teams/my-teams.component';
import { MyTeamsNewsComponent } from './my-teams-news/my-teams-news.component';
import { MyTeamsMatchesComponent } from './my-teams-matches/my-teams-matches.component';
import { MyTeamsHeaderComponent } from './my-teams-header/my-teams-header.component';
import { MyTeamsSearchComponent } from './my-teams-search/my-teams-search.component';
import { SharedModule } from '@goal-front/shared';
import { CoreModule, StatisticsModule, TablesModule } from '@goal-front/core';
import { MyTeamsRoutingModule } from './my-teams-routing.module';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    MyTeamsComponent,
    MyTeamsNewsComponent,
    MyTeamsMatchesComponent,
    MyTeamsHeaderComponent,
    MyTeamsSearchComponent
  ],
  imports: [
    CommonModule,
    MyTeamsRoutingModule,
    RouterModule,
    LazyLoadImageModule,
    SharedModule,
    CoreModule,
    FormsModule,
    MainNewsModule,
    SwiperModule,
    StatisticsModule,
    TablesModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class MyTeamsModule { }

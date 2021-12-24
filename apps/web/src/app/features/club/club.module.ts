import { MainNewsModule } from './../main-news/main-news.module';
import { MatchesModule } from './../matches/matches.module';
import { SidebarModule } from './../sidebar/sidebar.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ClubRoutingModule } from './club-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClubComponent } from './club/club.component';
import { ClubPlayersComponent } from './club-players/club-players.component';
import { ClubTransfersComponent } from './club-transfers/club-transfers.component';
import { ClubPlayerComponent } from './club-player/club-player.component';
import { CoreModule, StatisticsModule, TablesModule } from '@goal-front/core';
import { SharedModule } from '@goal-front/shared';
import { ClubSidebarModule } from './club-sidebar/club-sidebar.module';
import { TodayMatchesModule } from '../today-matches/today-matches.module';
import { SwiperModule } from 'ngx-swiper-wrapper';
// import { ClubLatestNewsComponent } from './club-latest-news/club-latest-news.component';



@NgModule({
  declarations: [
    ClubComponent,
    ClubPlayersComponent,
    ClubTransfersComponent,
    ClubPlayerComponent,
    // ClubLatestNewsComponent
  ],
  imports: [
    CommonModule,
    ClubRoutingModule,
    LazyLoadImageModule,
    CoreModule,
    SharedModule,
    SidebarModule,
    MainNewsModule,
    MatchesModule,
    StatisticsModule,
    TablesModule,
    ClubSidebarModule,
    TodayMatchesModule,
    SwiperModule
  ]
})
export class ClubModule { }

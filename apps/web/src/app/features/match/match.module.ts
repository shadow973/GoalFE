import { SidebarModule } from './../sidebar/sidebar.module';
import { MatchRoutingModule } from './match-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchComponent } from './match/match.component';
import { MatchHeaderComponent } from './match-header/match-header.component';
import { MatchHighlightsComponent } from './match-highlights/match-highlights.component';
import { MatchVoteComponent } from './match-vote/match-vote.component';
import { MatchCommentsComponent } from './match-comments/match-comments.component';
import { MatchFormationComponent } from './match-formation/match-formation.component';
import { MatchHighlightsOverviewComponent } from './match-highlights-overview/match-highlights-overview.component';
import { MatchStatisticsComponent } from './match-statistics/match-statistics.component';
import { MatchStatisticsItemComponent } from './match-statistics-item/match-statistics-item.component';
import { MatchFormationStadiumComponent } from './match-formation-stadium/match-formation-stadium.component';
import { MatchFormationPlayerComponent } from './match-formation-player/match-formation-player.component';
import { MatchVideosComponent } from './match-videos/match-videos.component';
import { MatchVideoComponent } from './match-video/match-video.component';
import { CoreModule, ShareSocialsModule } from '@goal-front/core';
import { SharedModule } from '@goal-front/shared';
import { CommentsModule } from '@goal-front/comments';
import { MatchStandingsComponent } from './match-standings/match-standings.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MatchH2hComponent } from './match-h2h/match-h2h.component';
import { MatchH2hItemComponent } from './match-h2h-item/match-h2h-item.component';
import { MatchPlayerStatsComponent } from './match-player-stats/match-player-stats.component';
import { MatchPlayerStatsItemComponent } from './match-player-stats-item/match-player-stats-item.component';
import { MatchComparePlayersComponent } from './match-compare-players/match-compare-players.component';
import { MatchComparePlayersStatsComponent } from './match-compare-players-stats/match-compare-players-stats.component';
import { MatchComparePlayersItemComponent } from './match-compare-players-item/match-compare-players-item.component';
import { MatchComparePlayersModalComponent } from './match-compare-players-modal/match-compare-players-modal.component';

@NgModule({
  declarations: [
    MatchComponent,
    MatchHeaderComponent,
    MatchHighlightsComponent,
    MatchVoteComponent,
    MatchCommentsComponent,
    MatchFormationComponent,
    MatchHighlightsOverviewComponent,
    MatchStatisticsComponent,
    MatchStatisticsItemComponent,
    MatchFormationStadiumComponent,
    MatchFormationPlayerComponent,
    MatchVideosComponent,
    MatchVideoComponent,
    MatchStandingsComponent,
    MatchH2hComponent,
    MatchH2hItemComponent,
    MatchPlayerStatsComponent,
    MatchPlayerStatsItemComponent,
    MatchComparePlayersComponent,
    MatchComparePlayersStatsComponent,
    MatchComparePlayersItemComponent,
    MatchComparePlayersModalComponent
  ],
  imports: [
    CommonModule,
    MatchRoutingModule,
    SidebarModule,
    SharedModule,
    CoreModule,
    ShareSocialsModule,
    CommentsModule,
    LazyLoadImageModule,
  ]
})
export class MatchModule { }

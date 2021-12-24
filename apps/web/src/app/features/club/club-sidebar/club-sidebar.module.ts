import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClubSidebarComponent } from './club-sidebar/club-sidebar.component';
import { ClubSidebarStandingsComponent } from './club-sidebar-standings/club-sidebar-standings.component';
import { ClubSidebarPlayersComponent } from './club-sidebar-players/club-sidebar-players.component';
import { ClubSidebarStatsComponent } from './club-sidebar-stats/club-sidebar-stats.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MatchRoutingModule } from '../../match/match-routing.module';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [ClubSidebarComponent, ClubSidebarStandingsComponent, ClubSidebarPlayersComponent, ClubSidebarStatsComponent],
  imports: [
    CommonModule,
    LazyLoadImageModule,
    MatchRoutingModule,
    MatSelectModule,
  ],
  exports: [
    ClubSidebarComponent,
  ]
})
export class ClubSidebarModule { }

import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatchesModule } from './../matches/matches.module';
import { MainNewsModule } from './../main-news/main-news.module';
import { SidebarModule } from './../sidebar/sidebar.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ChampionshipRoutingModule } from './championship-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionshipComponent } from './championship/championship.component';
import { CoreModule, StatisticsModule, TablesModule } from '@goal-front/core';
import { SharedModule } from '@goal-front/shared';




@NgModule({
  declarations: [
    ChampionshipComponent
  ],
  imports: [
    CommonModule,
    ChampionshipRoutingModule,
    LazyLoadImageModule,
    SidebarModule,
    MainNewsModule,
    CoreModule,
    MatchesModule,
    SharedModule,
    MatSelectModule,
    FormsModule,
    StatisticsModule,
    TablesModule
  ]
})
export class ChampionshipModule { }

import { MatchesModule } from './../matches/matches.module';
import { StatisticsPageRoutingModule } from './statistics-page-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsPageComponent } from './statistics-page/statistics-page.component';
import { MatRippleModule } from '@angular/material/core';
import { SharedModule } from '@goal-front/shared';
import { CoreModule, StatisticsModule, TablesModule } from '@goal-front/core';



@NgModule({
  declarations: [StatisticsPageComponent],
  imports: [
    CommonModule,
    StatisticsPageRoutingModule,
    CoreModule,
    SharedModule,
    MatchesModule,
    MatRippleModule,
    CoreModule,
    StatisticsModule,
    TablesModule
  ]
})
export class StatisticsPageModule { }

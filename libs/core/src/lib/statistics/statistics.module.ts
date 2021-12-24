import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics/statistics.component';
import { StatisticComponent } from './statistic/statistic.component';
import { MatRippleModule } from '@angular/material/core';
import { SharedModule } from '@goal-front/shared';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    StatisticsComponent,
    StatisticComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    LazyLoadImageModule,
    MatRippleModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    StatisticsComponent,
    StatisticComponent
  ]
})
export class StatisticsModule { }

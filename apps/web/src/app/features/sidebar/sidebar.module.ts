import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarNewsComponent } from './sidebar-news/sidebar-news.component';
import { SidebarStatisticsComponent } from './sidebar-statistics/sidebar-statistics.component';
import { SidebarTablesComponent } from './sidebar-tables/sidebar-tables.component';
import { SharedModule } from '@goal-front/shared';
import { CoreModule, StatisticsModule, TablesModule } from '@goal-front/core';
import { PromotionModule } from '@goal-front/promotion';



@NgModule({
  declarations: [
    SidebarComponent,
    SidebarNewsComponent,
    SidebarStatisticsComponent,
    SidebarTablesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LazyLoadImageModule,
    CoreModule,
    RouterModule,
    PromotionModule,
    CoreModule,
    StatisticsModule,
    TablesModule
  ],
  exports: [
    SidebarComponent,
    SidebarNewsComponent
  ]
})
export class SidebarModule { }

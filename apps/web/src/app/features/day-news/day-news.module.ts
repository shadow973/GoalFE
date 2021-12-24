import { SidebarModule } from './../sidebar/sidebar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayNewsComponent } from './day-news/day-news.component';
import { DayNewsRoutingModule } from './day-news-routing.module';
import { MainNewsModule } from '../main-news/main-news.module';
import { CoreModule } from '@goal-front/core';



@NgModule({
  declarations: [DayNewsComponent],
  imports: [
    CommonModule,
    DayNewsRoutingModule,
    MainNewsModule,
    SidebarModule,
    CoreModule
  ]
})
export class DayNewsModule { }

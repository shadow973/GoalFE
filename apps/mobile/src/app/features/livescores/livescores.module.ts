import { CoreModule } from '@goal-front/core';
import { SharedModule } from '@goal-front/shared';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule } from '@angular/forms';
import { LivescoresRoutingModule } from './livescores-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivescoresComponent } from './livescores/livescores.component';
import { LivescoresHeaderComponent } from './livescores-header/livescores-header.component';
import { LivescoresCalendarComponent } from './livescores-calendar/livescores-calendar.component';
import { LivescoresLeagueComponent } from './livescores-league/livescores-league.component';
import { LivescoresMatchComponent } from './livescores-match/livescores-match.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LivescoresContentComponent } from './livescores-content/livescores-content.component';
import { LivescoresMatchStatusComponent } from './livescores-match-status/livescores-match-status.component';
import { LivescoreLeagueSelectComponent } from './livescore-league-select/livescore-league-select.component';
import { LivescoreComponent } from './livescore/livescore.component';

@NgModule({
  declarations: [
    LivescoresComponent,
    LivescoresHeaderComponent,
    LivescoresCalendarComponent,
    LivescoresLeagueComponent,
    LivescoresMatchComponent,
    LivescoresContentComponent,
    LivescoresMatchStatusComponent,
    LivescoreLeagueSelectComponent,
    LivescoreComponent,
  ],
  imports: [
    CommonModule,
    LivescoresRoutingModule,
    MatCheckboxModule,
    FormsModule,
    InfiniteScrollModule,
    SwiperModule,
    LazyLoadImageModule,
    CoreModule,
    SharedModule
  ],
})
export class LivescoresModule {}

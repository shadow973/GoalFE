import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@goal-front/shared';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ShareSocialsComponent } from '../share-socials/share-socials/share-socials.component';
import { LeagueSelectComponent } from './league-select/league-select.component';
import { TimerComponent } from './timer/timer.component';
import { LoaderComponent } from './loader/loader.component';
import { MatchStatusComponent } from './match-status/match-status.component';



@NgModule({
  declarations: [
    LeagueSelectComponent,
    LoaderComponent,
    MatchStatusComponent,
    TimerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    LazyLoadImageModule,
    FormsModule
  ],
  exports: [
    LeagueSelectComponent,
    LoaderComponent,
    MatchStatusComponent,
    TimerComponent
  ]
})
export class CoreModule { }

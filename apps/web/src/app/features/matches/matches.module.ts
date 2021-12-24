import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesComponent } from './matches/matches.component';
import { MatchesItemComponent } from './matches/matches-item/matches-item.component';
import { SharedModule } from '@goal-front/shared';
import { CoreModule } from '@goal-front/core';



@NgModule({
  declarations: [MatchesComponent, MatchesItemComponent],
  imports: [
    CommonModule,
    LazyLoadImageModule,
    RouterModule,
    SharedModule,
    CoreModule
  ],
  exports: [MatchesComponent],
})
export class MatchesModule { }

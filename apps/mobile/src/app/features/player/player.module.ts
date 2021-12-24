import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MainNewsModule } from './../main-news/main-news.module';
import { PlayerRoutingModule } from './player-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { CoreModule } from '@goal-front/core';
import { SharedModule } from '@goal-front/shared';



@NgModule({
  declarations: [PlayerComponent],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    CoreModule,
    MainNewsModule,
    LazyLoadImageModule,
    SharedModule
  ]
})
export class PlayerModule { }

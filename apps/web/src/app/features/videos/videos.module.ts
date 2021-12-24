import { LazyLoadImageModule } from 'ng-lazyload-image';
import { VideosRoutingModule } from './videos-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosComponent } from './videos/videos.component';
import { VideoComponent } from './video/video.component';
import { SharedModule } from '@goal-front/shared';
import { CoreModule } from '@goal-front/core';



@NgModule({
  declarations: [VideosComponent, VideoComponent],
  imports: [
    CommonModule,
    VideosRoutingModule,
    SharedModule,
    LazyLoadImageModule,
    CoreModule
  ]
})
export class VideosModule { }

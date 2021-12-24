import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '@goal-front/core';
import { SharedModule } from '@goal-front/shared';
import { MatRippleModule } from '@angular/material/core';



@NgModule({
  declarations: [LatestNewsComponent],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    SharedModule,
    MatRippleModule
  ],
  exports: [LatestNewsComponent]
})
export class LatestNewsModule { }

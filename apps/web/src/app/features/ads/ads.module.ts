import { AdsRoutingModule } from './ads-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsComponent } from './ads/ads.component';



@NgModule({
  declarations: [AdsComponent],
  imports: [
    CommonModule,
    AdsRoutingModule
  ]
})
export class AdsModule { }

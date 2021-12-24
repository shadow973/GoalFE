import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesComponent } from './tables/tables.component';
import { MatRippleModule } from '@angular/material/core';
import { SharedModule } from '@goal-front/shared';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TablesComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MatRippleModule,
    LazyLoadImageModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    TablesComponent
  ]
})
export class TablesModule { }

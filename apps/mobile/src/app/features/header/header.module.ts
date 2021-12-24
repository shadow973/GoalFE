import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '@goal-front/core';
import { SharedModule } from '@goal-front/shared';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { MobileNavbarComponent } from './mobile-navbar/mobile-navbar.component';
import { SearchMobileComponent } from './search-mobile/search-mobile.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { MatRippleModule } from '@angular/material/core';



@NgModule({
  declarations: [
    MobileHeaderComponent,
    MobileNavbarComponent,
    SearchMobileComponent,
    SubMenuComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    LazyLoadImageModule,
    SharedModule,
    RouterModule,
    MatRippleModule
  ],
  exports: [
    MobileHeaderComponent,
    MobileNavbarComponent
  ]
})
export class HeaderModule { }

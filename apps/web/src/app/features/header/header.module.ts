import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '@goal-front/core';
import { SharedModule } from '@goal-front/shared';
import { NavbarStore } from '../../stores/navbar.store';
import { ModalService } from '../../services/modal.service';



@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    LazyLoadImageModule,
    SharedModule,
    RouterModule
  ],
  exports:[
    HeaderComponent
  ],
  providers: [
    NavbarStore,
    ModalService
  ]
})
export class HeaderModule { }

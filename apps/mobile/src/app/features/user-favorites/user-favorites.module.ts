import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFavoritesComponent } from './user-favorites/user-favorites.component';
import { UserFavoriteModalComponent } from './user-favorite-modal/user-favorite-modal.component';
import { UserFavoriteSearchComponent } from './user-favorite-search/user-favorite-search.component';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@goal-front/shared';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '@goal-front/core';



@NgModule({
  declarations: [
    UserFavoritesComponent,
    UserFavoriteModalComponent,
    UserFavoriteSearchComponent
  ],
  imports: [
    CommonModule,
    MatRippleModule,
    RouterModule,
    FormsModule,
    CoreModule
  ],
  exports: [
    UserFavoritesComponent,
    UserFavoriteModalComponent
  ],
  entryComponents: [
    UserFavoriteModalComponent
  ]
})
export class UserFavoritesModule { }

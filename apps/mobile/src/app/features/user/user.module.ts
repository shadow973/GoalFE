import { LazyLoadImageModule } from 'ng-lazyload-image';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSubsComponent } from './user-subs/user-subs.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserFavClubComponent } from './user-fav-club/user-fav-club.component';
import { MatRippleModule } from '@angular/material/core';
import { CoreModule } from '@goal-front/core';
import { SharedModule } from '@goal-front/shared';


@NgModule({
  declarations: [
    UserAuthComponent,
    UserProfileComponent,
    UserSubsComponent,
    UserEditComponent,
    UserFavClubComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    CoreModule,
    SharedModule,
    LazyLoadImageModule,
    MatRippleModule
  ],
  entryComponents: [
    UserAuthComponent,
    UserEditComponent
  ]
})
export class UserModule { }

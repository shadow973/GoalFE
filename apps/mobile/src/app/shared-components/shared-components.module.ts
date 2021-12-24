import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikesCommentsComponent } from './likes-comments/likes-comments.component';
import { IsMyLikePipe } from './likes-comments/is-my-like.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [LikesCommentsComponent, IsMyLikePipe],
  exports: [LikesCommentsComponent]
})
export class SharedComponentsModule{}

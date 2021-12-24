import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments/comments.component';
import { CommentsWriteComponent } from './comments-write/comments-write.component';
import { CommentComponent } from './comment/comment.component';
import { FormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SharedModule } from '@goal-front/shared';
import { CommentDeleteConfirmComponent } from './comment-delete-confirm/comment-delete-confirm.component';
import { CoreModule } from '@goal-front/core';



@NgModule({
  declarations: [
    CommentsComponent,
    CommentsWriteComponent,
    CommentComponent,
    CommentDeleteConfirmComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LazyLoadImageModule,
    SharedModule,
    CoreModule
  ],
  exports: [CommentsComponent],
})
export class CommentsModule { }

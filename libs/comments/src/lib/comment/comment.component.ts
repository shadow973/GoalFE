import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommentsStore } from '@goal-front/shared';
import { environment } from 'apps/web/src/environments/environment';
import { Subscription } from 'rxjs';
import { CommentDeleteConfirmComponent } from '../comment-delete-confirm/comment-delete-confirm.component';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentComponent implements OnInit {
  @Input() commentsService: any;
  @Input() itemId: number;
  @Input() comment: any;
  @Input() replyCommentId: number;
  @Input() hasControls: number;
  @Input() userLoggedIn: boolean;
  @Input() userId: number;
  @Input() top: boolean;

  @Output() refresh = new EventEmitter();

  replyComment: boolean;
  editComment: boolean;
  private repliesOpenSub: Subscription;
  likedByUser: boolean;


  constructor(
    private cd: ChangeDetectorRef,
    private commentsStore: CommentsStore,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.repliesOpenSub = this.commentsStore.closeForms$.subscribe(() => {
      this.replyComment = false;
      this.editComment = false;
      this.cd.markForCheck();
    });
  }

  ngOnChanges(): void {
    if (this.comment.liked_by && this.comment.liked_by.length) {
      this.likedByUser = !!(this.comment.liked_by.find(uId => uId == this.userId));
    }
    else {
      this.likedByUser = false;
    }
  }

  ngOnDestroy(): void {
    if (this.repliesOpenSub) this.repliesOpenSub.unsubscribe();
  }

  checkFBImage(image) {
    let imagelength = image.search('facebook');
    if (imagelength > -1) {
      return image;
    } else {
      return environment.storage + '/' + image;
    }
  }

  imageLinkGeneratorTeam(id): string {
    return `${environment.storage}/size/timthumb.php?src=/images/teams/${id}.png&w=48`;
  }

  reply(repl?: boolean) {
    if (repl) {
      this.commentsStore.closeForms();
    }
    this.replyComment = repl;
    this.cd.markForCheck();
  }

  edit(edit?: boolean) {
    if (edit) {
      this.commentsStore.closeForms();
    }
    this.editComment = edit;
    this.cd.markForCheck();
  }

  closeInput() {
    this.editComment = false;
    this.replyComment = false;
  }

  delete() {
    this.showDeleteCommentConfirmModal().afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        let obs$;
        if (!this.comment.comment_id) {
          obs$ = this.commentsService.deleteComment(this.itemId, this.comment.id);
        }
        else {
          obs$ = this.commentsService.deleteCommentReply(this.itemId, this.comment.comment_id, this.comment.id);
        }
        obs$.subscribe(() => {
          this.update(false);
        });
      }
    })
  }

  update(posted: boolean) {
    this.refresh.emit(posted);
  }

  toggleLike(isLike: boolean) {
    if (!this.userLoggedIn) return;
    let obs$;
    if (isLike) {
      if (!this.comment.comment_id) {
        obs$ = this.commentsService.likeComment(this.comment.id);
      }
      else {
        obs$ = this.commentsService.likeCommentReply(this.comment.id);
      }
    }
    else {
      if (!this.comment.comment_id) {
        obs$ = this.commentsService.unlikeComment(this.comment.id);
      }
      else {
        obs$ = this.commentsService.unlikeCommentReply(this.comment.id);
      }
    }
    obs$.subscribe(() => {
      this.update(false);
    });
  }

  showDeleteCommentConfirmModal(): any {
    return this.matDialog.open(CommentDeleteConfirmComponent, {
        hasBackdrop: true
    });
}

}

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comments-write',
  templateUrl: './comments-write.component.html',
  styleUrls: ['./comments-write.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsWriteComponent implements OnInit {
  @Input() commentsService: any;
  @Input() itemId: number;
  @Input() replyCommentId: number;
  @Input() userLoggedIn: boolean;
  @Input() comment: any;

  @Output() posted = new EventEmitter();

  commentValue: string;
  errorText: string;

  constructor(
    @Inject('MODAL_SERVICE') private modalService: any,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    if (this.comment) {
      this.commentValue = this.comment.content;
    }
  }

  private openLoginModal() {
    this.modalService.openLoginModal().afterClosed().subscribe();
  }

  postComment() {
    if(!this.validateCommentValue()) return;
    let obs$;
    if (!this.replyCommentId) {
      if (!this.comment) {
        obs$ = this.commentsService.postComment(this.itemId, this.commentValue);
      }
      else {
        obs$ = this.commentsService.editComment(this.itemId, this.comment.id, this.commentValue);
      }
    }
    else {
      if (!this.comment) {
        obs$ = this.commentsService.postCommentReply(this.itemId, this.replyCommentId, this.commentValue);
      }
      else {
        obs$ = this.commentsService.editCommentReply(this.itemId, this.comment.comment_id, this.comment.id, this.commentValue);
      }
    }

    obs$.subscribe(() => {
      this.posted.emit(true);
      this.commentValue = null;
      this.cd.markForCheck();
    });
  }

  checkSubmit(e) {
    if (e && e.keyCode == 13) {
      e.preventDefault();
      this.postComment();
    }
  }

  checkAuth(event) {
    if (!this.userLoggedIn) {
      event.preventDefault();
      this.openLoginModal();
    }
  }

  private validateCommentValue(): boolean {
    if(!this.commentValue || this.commentValue.length < 30){
      this.errorText = '* მინიმალური სიმბოლოების რაოდენობა არის 30.';
      return false;
    }
    if(this.commentValue.length > 8000){
      this.errorText = '* მაქსიმალური სიმბოლოების რაოდენობა არის 8000.';
      return false;
    }
    this.errorText = '';
    return true;
  }

}

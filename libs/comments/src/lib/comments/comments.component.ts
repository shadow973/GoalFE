import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { UserStore } from '@goal-front/shared';
import { Subscription } from 'rxjs';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsComponent implements OnInit {
  @Input() commentsService: any;
  @Input() itemId: number;
  comments: any[];
  loading: boolean;
  userLoggedIn: boolean;
  private userSub: Subscription;
  userId: number;
  commentsVisible: boolean;

  private lastPage = 1;
  private availablePages: number;
  showMoreVissible: boolean = true;

  topComment: any;

  constructor(
    private userStore: UserStore,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.userSub = this.userStore.userLoggedIn$()
      .subscribe((logged: boolean) => {
        this.userLoggedIn = logged;
        if (logged) {
          this.userId = this.userStore.userData.id;
        }
        this.cd.markForCheck();
      });

    this.getComments();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  getComments(postedNew?: boolean) {
    if (postedNew && !this.commentsVisible) {
      this.commentsVisible = true;
    }

    this.loading = true;
    this.cd.markForCheck();
    this.commentsService.getComments(this.itemId, 1, this.lastPage).subscribe((comments) => {
      this.loading = false;
      this.availablePages = comments.last_page;
      if (this.availablePages <= 1) {
        this.showMoreVissible = false;
      }

      if (comments && comments.data && comments.data.length) {
        this.topComment = comments.data[0];
        this.comments = comments.data.slice(1, comments.data.length);
      }
      else {
        this.comments = [];
        this.topComment = null;
      }
      this.cd.markForCheck();
    });
  }

  trackById(index: number, item: any) {
    return item.id;
  }

  toggleComments() {
    this.commentsVisible = !this.commentsVisible;
  }

  showMore() {
    if (this.lastPage <= this.availablePages) {
      this.lastPage += 1;
      this.getComments();
      if (this.lastPage == this.availablePages) {
        this.showMoreVissible = false;
      }
    }
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { HttpService, UserService, UserStore } from '@goal-front/shared';
import { Subject } from 'rxjs';
import { ModalService } from '../../../../../../apps/mobile/src/app/services/modal.service';
import { CookieService } from '@goal-front/shared';

@Component({
  selector: 'app-likes-comments',
  templateUrl: './likes-comments.component.html',
  styleUrls: ['./likes-comments.component.scss']
})
export class LikesCommentsComponent implements OnInit{

  @Output() commentsClick: EventEmitter<void> = new EventEmitter;
  @Input() likeIcon: 'thumbs-up' | 'heart' = 'thumbs-up';
  @Input() position: 'start' | 'center' | 'end' = 'center';
  @Input() commentClickUrl = null;
  @Input() padding: string = null;
  @Input() margin: string = null;
  @Input() parentPostObject;
  @Input() userId;

  private unsubscribe: Subject<void> = new Subject();

  constructor(
    private modalService: ModalService,
    private userStore: UserStore,
    private httpService: HttpService,
    private userService: UserService,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.userService.userLoggedIn
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((userId: number) => {
        this.userId = userId;
      });
    if(!this.userId){
      this.userId = this.cookieService.getCookie('userId');
      this.userId = parseInt(this.userId);
    }
  }

  public onCommentsClick(){
    this.commentsClick.emit();
  }

  public likeToggle(postItem): void {


    if(!this.userId) {
      this.modalService.openLoginModal().afterClosed().subscribe();
      return;
    }


    const foundMyLikeIndex = postItem.liked_by.findIndex(id => id === this.userId);
    if(foundMyLikeIndex > -1){
      this.changeLike(false, postItem);
      this.httpService.post(`articles/${postItem.id}/unlike`, {userId:this.userId})
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(() => {}, () => {
          this.changeLike(true, postItem);
        });
      return;
    }

    this.changeLike(true, postItem);
    this.httpService.post(`articles/${postItem.id}/like`, {userId:this.userId})
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => {}, () => {
        this.changeLike(false, postItem);
      });
  }

  private changeLike(status: boolean, postItem){

    if(status){
      postItem.liked_by.push(this.userId);
    }
    else{
      const foundMyLikeIndex = postItem.liked_by.findIndex(id => id === this.userId);
      postItem.liked_by.splice(foundMyLikeIndex, 1);
    }
    postItem.liked_by = postItem.liked_by.slice();
  }
}

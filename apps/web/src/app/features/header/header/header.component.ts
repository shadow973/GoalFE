import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { skip } from 'rxjs/operators';
import { UserStore } from '@goal-front/shared';
import { ModalService } from '../../../services/modal.service';
import { environment } from 'apps/web/src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userLoggedIn: boolean;
  user: any;
  userSub: Subscription;
  siteUrl: string;

  constructor(
    private modalService: ModalService,
    private userStore: UserStore
  ) { }

  ngOnInit(): void {
    this.userSub = this.userStore.userLoggedIn$()
      .pipe(skip(1))
      .subscribe((logged) => {
        this.userLoggedIn = logged;
        if (logged) {
          this.user = this.userStore.userData;
        }
      });
    
    this.siteUrl = environment.domain;
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  auth(): void {
    this.modalService.openLoginModal().afterClosed().subscribe();
  }

  logout(): void {
    this.userStore.logout();
  }

  getAvatar(image): string {
    var imagelength = image.search('facebook');
    // console.log
    if (imagelength > -1) {
      return image;
    } else {
      return `${environment.storage}/${image}`;
    }
  }


}

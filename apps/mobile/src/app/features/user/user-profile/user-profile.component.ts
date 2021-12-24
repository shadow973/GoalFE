import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserStore } from '@goal-front/shared';
import { UserService } from '@goal-front/shared';
import { LocalStore } from '@goal-front/shared';
import { MetaService } from '@goal-front/shared';
import { ModalService } from '../../../services/modal.service';
import { environment } from 'apps/web/src/environments/environment';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileComponent implements OnInit {
  userId: number;
  userData: any;
  private userLoggedSub: Subscription;
  userComments: any[];
  favClubs: any[];
  private favClubsSub: Subscription;
  activetab = 1;
  private routerSub: Subscription;


  constructor(
    private userStore: UserStore,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private localStore: LocalStore,
    private modalService: ModalService,
    private cd: ChangeDetectorRef,
    private router: Router,
    private metaService: MetaService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.routerSub = this.activatedRoute.paramMap.subscribe(params => {
      this.userId = parseInt(params.get('id'), 10) || 0;
      this.getComments();
    });

    this.userLoggedSub = this.userStore.userLoggedIn$()
      .pipe(filter(logged => logged !== null))
      .subscribe((logged) => {
        if (!logged) {
          this.router.navigate(['/']);
          return;
        }
        this.userData = this.userStore.userData;

        this.title.setTitle(`${this.userData.username} - Goal.ge`);
        this.metaService.generateTags({
          title: `${this.userData.username} - Goal.ge`,
          description: 'პროფილი',
          slug: `user/${this.userId}`
        });
        this.cd.markForCheck();
      });

    this.favClubsSub = this.localStore.favorites$().subscribe((d) => {
      if (d) {
        this.favClubs = d.filter(f => f.type == 'club');
      } else {
        this.favClubs = [];
      }
      this.cd.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
    this.userLoggedSub.unsubscribe();
    this.favClubsSub.unsubscribe();
  }

  private getComments() {
    this.userService.getUserComments(this.userId).subscribe((d) => {
      this.userComments = d;
      this.cd.markForCheck();
    });
  }

  checkFBImage(image) {
    let imagelength = image.search('facebook');
    if (imagelength > -1) {
      return image;
    } else {
      return environment.storage + '/' + image;
    }
  }

  changeTab(id) {
    if (id == this.activetab) return;
    this.activetab = id;
  }

  editProfile() {
    this.modalService.openEditProfileModal().afterClosed().subscribe((saved) => {
      if (saved) {
        this.userService.checkauthAPI();
      }
    });
  }

  removeFavClub(club: any) {
    this.localStore.toggleFavorites('club', club.id, club.slug, club.name);
  }

}

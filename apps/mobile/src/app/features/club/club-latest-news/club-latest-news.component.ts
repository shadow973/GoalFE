import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService, TeamService, UserStore } from '@goal-front/shared';
import { environment } from 'apps/mobile/src/environments/environment';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-club-latest-news',
  templateUrl: './club-latest-news.component.html',
  styleUrls: ['./club-latest-news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClubLatestNewsComponent implements OnInit {
  @Input() club: any;
  news: any[] = [];
  mainLoading = true;
  loading: boolean;
  page = 1;
  showItem = true;
  public userId;

  constructor(
    private teamService: TeamService,
    private cd: ChangeDetectorRef,
    private router: Router,
    private userStore: UserStore
  ) { }

  ngOnInit(): void {
    this.getNews();

    this.userStore.userLoggedIn$()
      .subscribe((logged: boolean) => {
        if (logged) {
          this.userId = this.userStore.userData.id;
        }
      });
  }

  private getNews() {
    if (this.loading) return;

    const perPage = 5;

    this.loading = true;
    this.cd.markForCheck();
    this.teamService.getTeamNews(this.club.team_id, this.page, perPage).subscribe((news) => {
      this.news = this.news.concat(news.data);
      this.mainLoading = false;
      this.loading = false;
      this.page++;
      this.cd.markForCheck();
    });
  }

  showMore() {
    if (this.page <= 4) {
      this.getNews();
    }
  }

  trackById(index: number, item: any) {
    return item.id;
  }


  imageLinkGenerator(fileName: string): string {
    return `${environment.storageurlResizerPoster}${fileName}&w=200&q=80`;
  }

  imageLinkGeneratorTeam(id) {
    return `${environment.storage}/size/timthumb.php?src=/images/teams/${id}.png&w=48`;
  }
}

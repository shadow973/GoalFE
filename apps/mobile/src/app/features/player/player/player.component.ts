import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetaService, PlayerService } from '@goal-front/shared';
import { environment } from 'apps/web/src/environments/environment';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent implements OnInit {
  loading: boolean;
  contentLoading: boolean;
  activeTab: number = 1;
  playerId: number;
  page: number;

  player: any;
  playerNews: any;
  playerStats: any;
  private routerSub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private playerService: PlayerService,
    private metaService: MetaService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.routerSub = this.activatedRoute.paramMap.subscribe(params => {
      this.playerId = parseInt(params.get('id'), 10);
      this.page = parseInt(params.get('page'), 10) || 0;
      this.getPlayerInfo();
      this.getData();
    });
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }

  changeTab(tabIndex): void {
    if (this.activeTab == tabIndex) return;
    this.activeTab = tabIndex;
    this.getData();
  }

  private getData() {
    if (this.activeTab == 1) {
      this.getPlayerNews(this.page);
    }
  }

  private getPlayerInfo() {
    this.loading = true;
    this.cd.markForCheck();
    this.playerService.getPlayerInfo(this.playerId).subscribe((d) => {
      this.loading = false;
      this.player = d;
      this.cd.markForCheck();

      this.title.setTitle(`${this.player.firstname} - Goal.ge`);
      this.metaService.generateTags( {
        title: `${this.player.firstname} - Goal.ge`,
        description: this.player.fullname,
        slug: this.player.firstname.slug,
        image: this.player.image_path
      });
    });
  }

  getPlayerNews(page: number) {
    this.contentLoading = true;
    this.cd.markForCheck();
    this.playerService.getPlayerNews(this.playerId, page).subscribe((d) => {
      this.contentLoading = false;
      this.playerNews = d;
      this.cd.markForCheck();
    });
  }

  imageLinkGenerator(id): string {
    return `${environment.storage}/images/teams/${id}.png`;
  }

}

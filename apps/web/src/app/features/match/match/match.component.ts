import { ActivatedRoute } from '@angular/router';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, NgZone, OnInit, PLATFORM_ID } from '@angular/core';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { Match } from '../../../models/match/match.model';
import { LivescoreService } from '@goal-front/shared';
import { MetaService } from '@goal-front/shared';
import { environment } from 'apps/web/src/environments/environment';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { EventReplayer } from 'preboot';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchComponent implements OnInit {
  activeTab: number = 1;
  matchId: number;
  match: Match;
  private routerSub: Subscription;
  isLive: boolean;
  loading: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private livescoreService: LivescoreService,
    private cd: ChangeDetectorRef,
    private metaService: MetaService,
    private title: Title,
    @Inject(PLATFORM_ID) private platformId: string,
    private eventReplayer: EventReplayer
  ) { }

  ngOnInit(): void {
    this.title.setTitle(`მატჩი - Goal.ge`);
    this.metaService.generateTags({
      title: `მატჩი - Goal.ge`,
      description: `მატჩი - Goal.ge`,
      slug: `match/${this.matchId}`
    });

    this.routerSub = this.activatedRoute.paramMap.subscribe(params => {
      this.matchId = parseInt(params.get('id'), 10);
      this.getMatch();
    });
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.eventReplayer.replayAll();
      this.loading = false;
    }
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }


  changeTab(tabIndex): void {
    if (this.activeTab == tabIndex) return;
    this.activeTab = tabIndex;
    this.cd.markForCheck();
  }

  private getMatch() {
    this.livescoreService.getMatchInfo(this.matchId).subscribe((d) => {
      if (!d) return;
      console.log("this is match data", d)
      this.match = d.data;

      this.isLive = !!(this.match.time.status == 'LIVE' || this.match.time.status == 'ET' || this.match.time.status == 'PEN_LIVE' || this.match.time.status == 'HT');

      this.setMeta();

      this.cd.markForCheck();

      if(this.match?.articles && this.match?.articles?.length) {
        this.changeTab(3);
      }
    });
  }

  hasAlreadySetMeta: boolean;
  private setMeta() {
    if (this.hasAlreadySetMeta) return;
    this.hasAlreadySetMeta = true;

    this.title.setTitle(`${this.match.localTeam.data.name} vs ${this.match.visitorTeam.data.name} - Goal.ge`);

    let metaData = {
      title: `${this.match.localTeam.data.name} vs ${this.match.visitorTeam.data.name} - Goal.ge`,
      description: `${this.match.localTeam.data.name} vs ${this.match.visitorTeam.data.name} - Goal.ge`,
      slug: `match/${this.matchId}`,
      image: `${environment.domain}/assets/img/share_image.png`,
    }

    if(this.match.articles && this.match.articles.length) {
      metaData = {
        title: `${this.match.localTeam.data.name} vs ${this.match.visitorTeam.data.name} - Goal.ge`,
        description: `${this.match.localTeam.data.name} vs ${this.match.visitorTeam.data.name} - Goal.ge`,
        slug: `match/${this.matchId}`,
        image: `${environment.storage}/uploads/posts/${this.match.articles[0].main_gallery_item.filename_webp}`
      }
    }

    this.metaService.generateTags(metaData);
  }

}

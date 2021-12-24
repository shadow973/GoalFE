
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TeamService } from '@goal-front/shared';
import { LocalStore } from '@goal-front/shared';
import { MetaService } from '@goal-front/shared';
import { environment } from 'apps/web/src/environments/environment';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClubComponent implements OnInit {
  loading: boolean;
  contentLoading: boolean;
  teamId: number;
  private slug: string;
  activeTabId: number;
  team: any;
  teamNews: any;
  teamMatches: any[];
  teamPlayers: any[];
  teamStats: any;
  teamTransfers: any[];
  fullData: any;
  teamStanding: any[];
  public isSmallScreen = false;

  private swipeConfig: any;

  private matchesPage = 1;
  private matchesLastPage: number;
  private transfersPage = 1;
  private transfersLastPage: number;

  private favoriteClubs: any[];
  private favsSub: Subscription;

  get clubSubscribed(): boolean {
    if (!this.favoriteClubs || !this.favoriteClubs.length || !this.teamId) return;
    return !!(this.favoriteClubs.find((fc) => fc.id == this.teamId));
  }

  private routerSub: Subscription;
  newsPage: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private teamService: TeamService,
    private cd: ChangeDetectorRef,
    private localStore: LocalStore,
    private router: Router,
    private metaService: MetaService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.swipeConfig = {
      direction: 'horizontal',
      initialSlide: 0,
      updateOnWindowResize: true,
      preloadImages: false,
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        375: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        993: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1441: {
          slidesPerView: 4,
          spaceBetween: 30
        }
      }
    };

    this.favsSub = this.localStore.favorites$().subscribe((d: any[]) => {
      if (d) {
        this.favoriteClubs = d.filter(f => f.type == 'club');
      } else {
        this.favoriteClubs = [];
      }
    });

    this.routerSub = this.activatedRoute.paramMap.subscribe(params => {
      this.teamId = parseInt(params.get('id'), 10);
      this.slug = params.get('slug');
      this.newsPage = parseInt(params.get('page'), 10) || 0;
      this.changeTab(1);
      this.getTeamInfo();
    });

    this.getTeamFullData();
    this.detectWindowWidth(window.innerWidth);
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
    this.favsSub.unsubscribe();
  }

  private getTeamFullData() {
    const matchesLimit = 4;

    this.contentLoading = true;
    this.cd.markForCheck();
    this.teamService.getTeamFullData(this.teamId, matchesLimit).subscribe((data) => {
      this.contentLoading = false;
      this.fullData = data;
      this.cd.markForCheck();
    });
  }

  private getTeamInfo() {
    this.loading = true;
    this.cd.markForCheck();
    this.teamService.getTeamInfo(this.teamId).subscribe((d) => {
      this.loading = false;
      this.team = d;
      this.cd.markForCheck();

      this.title.setTitle(`${this.team.name} - Goal.ge | გვერდი - ${this.newsPage}`);
      this.metaService.generateTags({
        title: `${this.team.name} - Goal.ge | გვერდი - ${this.newsPage}`,
        description: `გაეცანი ${this.team.name} მიმდინარე სიახლეებს, მატჩების შედეგებს, სატურნირო ცხრილს, სტატისტიკასა და სხვა მნიშვნელოვან ინფორმაციას ჩვენს საიტზე. | გვერდი - ${this.newsPage}`,
        slug: `club/${this.teamId}/${this.slug}/${this.newsPage}`
      });
    });
  }

  imageLinkGeneratorTeam(id): string {
    return `${environment.storage}/images/teams/${id}.png`;
  }

  changeTab(tabIndex): void {
    //if (this.activeTabId == tabIndex) return;
    this.activeTabId = tabIndex;
    this.resetPages();
    this.getData();
  }

  private getData() {
    if (this.activeTabId == 1) {
      this.getTeamNews(this.newsPage);
    }
    if (this.activeTabId == 2) {
      this.getTeamMatches();
    }
    if (this.activeTabId == 3) {
      this.getTeamPlayers();
    }
    if (this.activeTabId == 4) {
      this.getTeamStats();
    }
    if (this.activeTabId == 5) {
      this.getTeamTransfers();
    }
    if (this.activeTabId == 8) {
      this.getTeamStanding();
    }
  }

  private getTeamNews(page: number) {
    this.contentLoading = true;
    this.cd.markForCheck();
    this.teamService.getTeamNews(this.teamId, page).subscribe((d) => {
      this.contentLoading = false;
      this.teamNews = d;
      this.cd.markForCheck();
    });
  }

  getTeamStanding() {
    this.contentLoading = true;
    this.cd.markForCheck();
    this.teamService.getTeamStanding(this.teamId).subscribe((d) => {
      this.contentLoading = false;
      if (d&&d.data.length) {
        this.teamStanding = d.data[d.data.length-1];
      }
      this.cd.markForCheck();
    });
  }

  private getTeamMatches() {
    this.contentLoading = true;
    this.cd.markForCheck();
    this.teamService.getTeamMatches(this.teamId, this.matchesPage).subscribe((d) => {
      this.contentLoading = false;
      this.teamMatches = d.data;
      this.matchesLastPage = d.last_page;
      this.cd.markForCheck();
    });
  }

  private getTeamPlayers() {
    this.contentLoading = true;
    this.cd.markForCheck();
    this.teamService.getTeamPlayers(this.teamId).subscribe((d) => {
      this.contentLoading = false;
      this.teamPlayers = d.data;
      this.cd.markForCheck();
    });
  }

  private getTeamStats() {
    this.contentLoading = true;
    this.cd.markForCheck();
    this.teamService.getTeamStats(this.teamId).subscribe((d) => {
      this.contentLoading = false;
      this.teamStats = d;
      this.cd.markForCheck();
    });
  }

  private getTeamTransfers() {
    this.contentLoading = true;
    this.cd.markForCheck();
    this.teamService.getTeamTransfers(this.teamId, this.transfersPage).subscribe((d) => {
      this.contentLoading = false;
      this.teamTransfers = d.data;
      this.transfersLastPage = d.last_page;
      this.cd.markForCheck();
    });
  }

  slideMatches(isNext: boolean) {
    if (isNext) {
      if (this.matchesPage < this.matchesLastPage) {
        this.matchesPage++;
        this.getTeamMatches();
      }
    }
    else {
      if (this.matchesPage > 1) {
        this.matchesPage--;
        this.getTeamMatches();
      }
    }
  }

  slideTransfers(isNext: boolean) {
    if (isNext) {
      if (this.transfersPage < this.transfersLastPage) {
        this.transfersPage++;
        this.getTeamTransfers();
      }
    }
    else {
      if (this.transfersPage > 1) {
        this.transfersPage--;
        this.getTeamTransfers();
      }
    }
  }

  private resetPages() {
    this.matchesPage = 1;
    this.transfersPage = 1;
  }

  subscribe(id: number, slug: string, name: string): void {
    this.localStore.toggleFavorites('club', id, slug, name);
  }

  pageChanged(page: number) {
    this.router.navigate([`/club/${this.teamId}/${this.slug}/${page}`]);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.detectWindowWidth(event.target.innerWidth);
  }

  private detectWindowWidth(width: number){
    this.isSmallScreen = width < 576;
  }
}

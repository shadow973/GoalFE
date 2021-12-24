import { environment } from './../../../../environments/environment';
import { Subscription } from 'rxjs';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { LeagueService, LocalStore } from '@goal-front/shared';
import { MetaService } from '@goal-front/shared';

@Component({
  selector: 'app-championship',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChampionshipComponent implements OnInit {

  loading: boolean;
  contentLoading: boolean;
  championshipId: number;
  private slug: string;
  activeTabId: number;
  championship: any;
  championshipNews: any;
  championshipMatches: any[];
  championshipStats: any;
  championshipStandings: any;


  season: any;
  seasons: any[];
  round: any;
  rounds: any[];
  stage: any;
  stages: any[];

  private routerSub: Subscription;
  newsPage: number;

  private favoriteChamps: any[];
  private favsSub: Subscription;

  get champSubscribed(): boolean {
    if (!this.favoriteChamps || !this.favoriteChamps.length || !this.championshipId) return;
    return !!(this.favoriteChamps.find((ft) => ft.id == this.championshipId));
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private leagueService: LeagueService,
    private cd: ChangeDetectorRef,
    private router: Router,
    private metaService: MetaService,
    private title: Title,
    private localStore: LocalStore
  ) { }

  ngOnInit(): void {
    this.routerSub = this.activatedRoute.paramMap.subscribe(params => {
      this.championshipId = parseInt(params.get('id'), 10);
      this.slug = params.get('slug');
      this.newsPage = parseInt(params.get('page'), 10) || 0;
      this.getChampionshipInfo();
    });

    this.favsSub = this.localStore.favorites$().subscribe((d: any[]) => {
      if (d) {
        this.favoriteChamps = d.filter(f => f.type == 'championship');
      } else {
        this.favoriteChamps = [];
      }
    });
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
    this.favsSub.unsubscribe();
  }

  private getChampionshipInfo() {
    this.loading = true;
    this.cd.markForCheck();
    this.leagueService.getLeagueInfo(this.championshipId).subscribe((d) => {
      this.loading = false;
      this.championship = d;
      this.cd.markForCheck();
      this.setSeasonAndRound();
      this.changeTab(1);

      this.title.setTitle(`${this.championship.name} - Goal.ge | გვერდი - ${this.newsPage}`);
      this.metaService.generateTags({
        title: `${this.championship.name} - Goal.ge | გვერდი - ${this.newsPage}`,
        description: `გაეცანი ${this.championship.name} მიმდინარე სიახლეებს, მატჩების შედეგებს, სატურნირო ცხრილს, სტატისტიკასა და სხვამნიშვნელოვან ინფორმაციას ჩვენს საიტზე. | გვერდი - ${this.newsPage}`,
        slug: `championship/${this.championshipId}/${this.slug}/${this.newsPage}`
      });
    });
  }

  private setSeasonAndRound() {
    if (!this.championship) return;
    this.seasons = this.championship.seasons;
    this.rounds = this.championship.rounds;
    this.stages = this.championship.stages;

    if (this.seasons && this.seasons.length) {
      this.season = this.seasons.find((s) => s.season_id == this.championship.current_season_id);
      if (!this.season) this.season = this.seasons[0];
    }

    if (this.rounds && this.rounds.length) {
      this.round = this.rounds.find((s) => s.round_id == this.championship.current_round_id);
      if (!this.round) this.round = this.rounds[0];
    }

    if (this.stages && this.stages.length) {
      this.stage = this.stages.find((s) => s.stage_id == this.championship.current_stage_id);
      if (!this.stage) this.stage = this.stages[0];
    }
  }

  imageLinkGeneratorChampionship(id): string {
    return `${environment.storage}/images/countries/flags/${id}.png`;
  }

  changeTab(tabIndex): void {
    //if (this.activeTabId == tabIndex) return;
    this.activeTabId = tabIndex;
    this.resetPages();
    this.getData();
  }

  private getData() {
    if (this.activeTabId == 1) {
      this.getChampionshipNews(this.newsPage);
    }
    if (this.activeTabId == 2) {
      this.getChampionshipMatches();
    }
    if (this.activeTabId == 3) {
      this.getChampionshipStandings();
    }
    if (this.activeTabId == 4) {
      this.getChampionshipStats();
    }
  }

  private getChampionshipNews(page: number) {
    this.contentLoading = true;
    this.cd.markForCheck();
    this.leagueService.getLeagueNews(this.championshipId, page).subscribe((d) => {
      this.contentLoading = false;
      this.championshipNews = d;
      this.cd.markForCheck();
    });
  }

  getChampionshipMatches() {
    this.contentLoading = true;
    this.cd.markForCheck();
    
    if(this.championship.is_cup) {
      const roundId = this.stage.type == 'Group Stage' ? this.round.round_id : '';
      this.leagueService.getLeagueMatchesBySeasonAndStage(this.championshipId, this.season.season_id, this.stage.stage_id, roundId).subscribe((d) => {
        this.contentLoading = false;
        this.championshipMatches = d;
        this.cd.markForCheck();
      });
    } else {
      this.leagueService.getLeagueMatchesBySeasonAndRound(this.championshipId, this.season.season_id, this.round.round_id).subscribe((d) => {
        this.contentLoading = false;
        this.championshipMatches = d;
        this.cd.markForCheck();
      });
    }
  }

  getChampionshipStandings() {
    this.contentLoading = true;
    this.cd.markForCheck();
    this.leagueService.getLeagueStandings(this.championshipId, this.season.season_id).subscribe((d) => {
      this.contentLoading = false;
      if (d && d.length) {
        this.championshipStandings = d;
      }
      this.cd.markForCheck();
    });
  }


  private getChampionshipStats() {
    this.contentLoading = true;
    this.cd.markForCheck();
    this.leagueService.getLeagueStatistics(this.championshipId).subscribe((d) => {
      this.contentLoading = false;
      this.championshipStats = d;
      this.cd.markForCheck();
    });
  }

  private resetPages() {
    this.setSeasonAndRound();
  }

  matchSeasonChanged() {
    this.cd.markForCheck();
    this.leagueService.getLeagueRoundsBySeason(this.season.season_id).subscribe((d) => {
      this.rounds = d;
      if (this.rounds.length) {
        this.round = this.rounds[0];
      }
      this.cd.markForCheck();
      this.getChampionshipMatches();
    })
  }

  subscribe(id: number, slug: string, name: string, countryId: number): void {
    this.localStore.toggleFavorites('championship', id, slug, name, countryId);
  }

  pageChanged(page: number) {
    this.router.navigate([`/championship/${this.championshipId}/${this.slug}/${page}`]);
  }

  imageLinkGeneratorClub(id): string {
    return `${environment.storage}/size/timthumb.php?src=/images/teams/${id}.png&w=48`;
  }

}

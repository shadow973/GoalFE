import { environment } from './../../../../environments/environment';
import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LeagueService } from '@goal-front/shared';
import { MetaService } from '@goal-front/shared';

@Component({
  selector: 'app-statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticsPageComponent implements OnInit {
  leagueName: string;
  loading: boolean;
  activeTab: number = 1;

  private leagueId: number;
  private seasonId: number;

  statistics: any;
  standings: any;
  matches: any;

  matchesPage = 1;
  private matchesLastPage: number;

  constructor(
    private leagueService: LeagueService,
    private cd: ChangeDetectorRef,
    private metaService: MetaService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('ცხრილები - Goal.ge');
    this.metaService.generateTags( {
      title: 'ცხრილები - Goal.ge',
      description: 'ადევნე თვალი სატურნირო ცხრილებს ჩვენი საიტის დახმარებით. Goal.ge - ყველაზე დიდი სპორტული პორტალი საქართველოში.',
      slug: 'cxrilebi'
    });

    
    //this.changeTab(1);
  }

  leagueChanged(league: any): void {
    this.leagueId = league.league_id;
    this.leagueName = league.name;
    this.seasonId = league.current_season_id;
    this.getData();
    this.cd.markForCheck();
  }

  changeTab(tabIndex): void {
    if (this.activeTab == tabIndex) return;
    this.activeTab = tabIndex;
    this.getData();
  }

  private getData() {
    if (this.activeTab == 1) {
      this.getStandings();
    }
    if (this.activeTab == 2) {
      this.getMatches();
    }
    if (this.activeTab == 3) {
      this.getStatistics();
    }
  }

  private getStandings(): void {
    this.loading = true;
    this.cd.markForCheck();

    this.leagueService.getLeagueStandings(this.leagueId, this.seasonId)
      .subscribe((d) => {
        this.loading = false;
        this.standings = null;
        if (d && d.length) {
          this.standings = d[0].standings.data;
        }
        this.cd.markForCheck();
      });
  }

  private getStatistics(): void {
    this.loading = true;
    this.cd.markForCheck();

    this.leagueService.getLeagueStatistics(this.leagueId)
      .subscribe((d) => {
        this.loading = false;
        this.statistics = null;
        this.statistics = d;
        this.cd.markForCheck();
      });
  }

  private getMatches(): void {
    this.loading = true;
    this.cd.markForCheck();

    this.leagueService.getLeagueMatches(this.leagueId, this.matchesPage)
      .subscribe((d) => {
        this.loading = false;
        this.matches = null;
        this.matches = d.data;
        this.matchesLastPage = d.last_page;
        this.cd.markForCheck();
      });
  }

  slideMatches(isNext: boolean) {
    if (isNext) {
      if (this.matchesPage < this.matchesLastPage) {
        this.matchesPage++;
        this.getMatches();
      }
    }
    else {
      if (this.matchesPage > 1) {
        this.matchesPage--;
        this.getMatches();
      }
    }
  }

}

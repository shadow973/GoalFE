import { Subscription } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MetaService, TeamService } from '@goal-front/shared';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-my-teams',
  templateUrl: './my-teams.component.html',
  styleUrls: ['./my-teams.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyTeamsComponent implements OnInit {
  newsLoading: boolean;
  matchesLoading: boolean;
  standingsLoading: boolean;
  statsLoading: boolean;
  teamId: number;
  teamName: string;
  teamNews: any;
  teamMatches: any[];
  teamStandings: any;
  teamStats: any;

  constructor(
    private teamService: TeamService,
    private cd: ChangeDetectorRef,
    private metaService: MetaService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('ჩემი გუნდები - Goal.ge');
    this.metaService.generateTags({
      title: 'ცხრილები - Goal.ge',
      description: 'დაამატე ფავორიტი გუნდები და ადევნე თვალი მათ შედეგებსა და სტატისტიკას. Goal.ge - ყველაზე დიდი სპორტული პორტალი საქართველოში.',
      slug: 'cxrilebi'
    });
  }

  getTeamData(team: any) {
    this.teamId = team?.id;
    this.teamName = team?.name;
    if (!team) return;
    this.getTeamNews();
    this.getTeamMatches();
    this.getTeamStandings();
    this.getTeamStats();
  }


  private getTeamNews() {
    this.newsLoading = true;
    this.cd.markForCheck();
    this.teamService.getUserTeamNews(this.teamId).subscribe((d) => {
      this.newsLoading = false;
      this.teamNews = d;
      this.cd.markForCheck();
    });
  }

  private getTeamMatches() {
    this.matchesLoading = true;
    this.cd.markForCheck();
    this.teamService.getUserTeamMatches(this.teamId).subscribe((d) => {
      this.matchesLoading = false;
      this.teamMatches = d.data;
      this.cd.markForCheck();
    });
  }

  private getTeamStandings() {
    this.standingsLoading = true;
    this.cd.markForCheck();
    this.teamService.getTeamStandingsBySeason(this.teamId).subscribe((d) => {
      this.standingsLoading = false;
      this.teamStandings = d.data;
      this.cd.markForCheck();
    });
  }

  private getTeamStats() {
    this.statsLoading = true;
    this.cd.markForCheck();
    this.teamService.getUserTeamStats(this.teamId).subscribe((d) => {
      this.statsLoading = false;
      this.teamStats = d;
      this.cd.markForCheck();
    });
  }

}

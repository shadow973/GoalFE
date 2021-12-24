import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'apps/web/src/environments/environment';
import * as moment from 'moment';
import { Match, MatchTeamData, Team } from '../../../models/match/match.model';

@Component({
  selector: 'app-match-h2h-item',
  templateUrl: './match-h2h-item.component.html',
  styleUrls: ['./match-h2h-item.component.scss']
})
export class MatchH2hItemComponent implements OnInit {
  @Input() team?: MatchTeamData;
  @Input() matches: any[];

  private visibleMatchesCount = 5;
  public visibleMatches: any[];
  public isAllShown: boolean;
  public toggleButtonText: string;

  constructor() { }

  ngOnInit(): void {
    this.isAllShown = false;
    this.toggleButtonText = 'მეტი მატჩების ჩვენება';
    this.visibleMatches = this.matches.slice(0, this.visibleMatchesCount);
  }

  imageLinkGenerator(link): string {
    return `${environment.storage}/size/timthumb.php?src=${link}&w=20&q=100`;
  }

  private getWinner(standing) {
    if(this.isDraw(standing)) return null;

    if(standing.localteam_score > standing.visitorteam_score) return standing.localteam_id;

    return standing.visitorteam_id;
  }

  isDraw(standing) {
    return standing.localteam_score === standing.visitorteam_score;
  }

  isWon(team_id, standing) {
    return team_id === this.getWinner(standing);
  }

  isLost(team_id, standing) {
    return !this.isDraw(standing) && team_id !== this.getWinner(standing);
  }

  getFormattedDate(date) {
    return moment(date).format('DD.MM.YYYY HH:mm');
  }

  toggleMatches() {
    if(this.isAllShown) {
      this.visibleMatches = this.matches.slice(0, this.visibleMatchesCount);
      this.toggleButtonText = 'მეტი მატჩების ჩვენება';
    } else {
      this.visibleMatches = this.matches;
      this.toggleButtonText = 'დახურვა';
    }

    this.isAllShown = !this.isAllShown;
  }
}

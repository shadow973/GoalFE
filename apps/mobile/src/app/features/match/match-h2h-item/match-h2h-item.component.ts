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

  private getWinner(match) {
    if(this.isDraw(match)) return null;

    if(match.localteam_score > match.visitorteam_score) return match.localteam_id;

    return match.visitorteam_id;
  }

  isDraw(match) {
    return match.localteam_score === match.visitorteam_score;
  }

  isWon(team_id, match) {
    return team_id === this.getWinner(match);
  }

  isLost(team_id, match) {
    return !this.isDraw(match) && team_id !== this.getWinner(match);
  }

  getDate(dateTime) {
    return moment(dateTime).format('DD.MM.YYYY');
  }

  getTime(dateTime) {
    return moment(dateTime).format('HH:mm:ss');
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

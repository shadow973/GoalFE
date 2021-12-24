import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'apps/web/src/environments/environment';

@Component({
  selector: 'app-match-player-stats-item',
  templateUrl: './match-player-stats-item.component.html',
  styleUrls: ['./match-player-stats-item.component.scss']
})
export class MatchPlayerStatsItemComponent implements OnInit {
  @Input() blockTitle: string;
  @Input() stats: any[];

  private visiblePlayersCount = 3;
  public visibleStats: any[];
  public isAllShown: boolean;
  public toggleButtonText: string;

  constructor() { }

  ngOnInit(): void {
    this.isAllShown = false;
    this.toggleButtonText = 'ყველა ფეხბურთელის ნახვა';
    this.visibleStats = this.stats.slice(0, this.visiblePlayersCount);
  }

  imageLinkGenerator(teamId): string {
    return `${environment.storage}/size/timthumb.php?src=/images/teams/${teamId}.png&w=20&q=100`;
  }

  togglePlayers() {
    if(this.isAllShown) {
      this.visibleStats = this.stats.slice(0, this.visiblePlayersCount);
      this.toggleButtonText = 'ყველა ფეხბურთელის ნახვა';
    } else {
      this.visibleStats = this.stats;
      this.toggleButtonText = 'დახურვა';
    }

    this.isAllShown = !this.isAllShown;
  }
}

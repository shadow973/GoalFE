import { switchMap } from 'rxjs/operators';
import { Subscription, timer } from 'rxjs';
import { MatchStatistics, MatchStatisticsTeam } from './../../../models/match/match-statistics.model';
import { ChangeDetectionStrategy, Component, Input, OnInit, ChangeDetectorRef, Inject, PLATFORM_ID } from '@angular/core';
import { LivescoreService } from '@goal-front/shared';
import { environment } from 'apps/web/src/environments/environment';
import { isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-match-statistics',
  templateUrl: './match-statistics.component.html',
  styleUrls: ['./match-statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchStatisticsComponent implements OnInit {
  @Input() matchId: number;
  @Input() localTeamId: number;
  @Input() visitorTeamId: number;
  @Input() isLive: boolean;

  matchStatistics: MatchStatistics = new MatchStatistics();
  private statisticsRefresher: Subscription;

  constructor(
    private livescoreService: LivescoreService,
    private cd: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: string
  ) { }

  ngOnInit(): void {
    this.getMatchStatistics();
  }

  ngOnDestroy(): void {
    this.statisticsRefresher.unsubscribe();
  }

  private getMatchStatistics() {
    if (this.statisticsRefresher) {
      this.statisticsRefresher.unsubscribe();
    }

    this.statisticsRefresher = timer(0, environment.match_refresh_seconds * 1000).pipe(
      switchMap(() => {
        return this.livescoreService.getMatchStatistics(this.matchId)
      })
    ).subscribe((d) => {
      if (!this.isLive || isPlatformServer(this.platformId)) {
        this.statisticsRefresher.unsubscribe();
      }

      if (!d || !d.data || !d.data.length) return;
      d.data.forEach((teamStats: MatchStatisticsTeam) => {
        if (teamStats.team_id == this.localTeamId) {
          this.matchStatistics.local_team = teamStats;
        }
        if (teamStats.team_id == this.visitorTeamId) {
          this.matchStatistics.visitor_team = teamStats;
        }
      });
      this.cd.markForCheck();
    });
  }
}

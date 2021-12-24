import { tap } from 'rxjs/operators';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LeagueStore } from '@goal-front/shared';

@Component({
  selector: 'app-sidebar-statistics',
  templateUrl: './sidebar-statistics.component.html',
  styleUrls: ['./sidebar-statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarStatisticsComponent implements OnInit {

  private leagueId: number;
  loading: boolean;
  statistics: any[];

  constructor(
    private cd: ChangeDetectorRef,
    private leagueStore: LeagueStore
  ) { }

  ngOnInit(): void { }

  leagueChanged(league: any): void {
    this.leagueId = league.league_id;
    this.getStatistics();
  }

  private getStatistics(): void {
    this.leagueStore.getLeagueStatistics(this.leagueId)
      .pipe(
        tap(() => this.loading = true)
      )
      .subscribe((d) => {
        this.loading = false;
        this.statistics = null;
        this.statistics = d;
        this.cd.markForCheck();
      });
  }

}

import { tap } from 'rxjs/operators';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LeagueStore } from '@goal-front/shared';

@Component({
  selector: 'app-sidebar-tables',
  templateUrl: './sidebar-tables.component.html',
  styleUrls: ['./sidebar-tables.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarTablesComponent implements OnInit {
  private leagueId: number;
  private seasonId: number;
  loading: boolean;
  standings: any[];

  constructor(
    private cd: ChangeDetectorRef,
    private leagueStore: LeagueStore
  ) { }

  ngOnInit(): void { }

  leagueChanged(league: any): void {
    this.leagueId = league.league_id;
    this.seasonId = league.current_season_id;
    this.getStandings();
  }

  private getStandings(): void {
    this.leagueStore.getLeagueStandings(this.leagueId, this.seasonId)
      .pipe(
        tap(() => this.loading = true)
      )
      .subscribe((d) => {
        this.loading = false;
        this.standings = null;
        if (d && d.length) {
          this.standings = d[0].standings.data;
        }
        this.cd.markForCheck();
      });
  }
}

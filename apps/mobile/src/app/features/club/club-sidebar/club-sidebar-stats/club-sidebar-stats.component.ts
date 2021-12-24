import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LivescoreService } from '@goal-front/shared';
import { environment } from 'apps/web/src/environments/environment';

@Component({
  selector: 'app-club-sidebar-stats',
  templateUrl: './club-sidebar-stats.component.html',
  styleUrls: ['./club-sidebar-stats.component.scss']
})
export class ClubSidebarStatsComponent implements OnInit {
  @Input() teamId: number;
  leagues: any[];
  chosenLeague: any;

  constructor(
    private livescoreSerice: LivescoreService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadLeagues();
  }

  imageLinkGeneratorChampionship(id): string {
    return `${environment.storage}/images/countries/flags/${id}.png`;
  }

  loadLeagues() {
    this.cd.markForCheck();
    this.livescoreSerice.getTeamLeagues(this.teamId).subscribe((d) => {
      this.leagues = d.data;
      if(this.leagues.length > 0) {
        this.chosenLeague = this.leagues[0];
      }

      this.cd.markForCheck();
    })
  }

  leagueChanged($event) {
    this.chosenLeague = $event.value;
  }
}

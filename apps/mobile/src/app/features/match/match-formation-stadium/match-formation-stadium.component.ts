import { ChangeDetectionStrategy, Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatchPlayer } from '../../../models/match/match-players.model';

@Component({
  selector: 'app-match-formation-stadium',
  templateUrl: './match-formation-stadium.component.html',
  styleUrls: ['./match-formation-stadium.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchFormationStadiumComponent implements OnInit {
  @Input() match: any;
  @Input() homeTeamLineup: MatchPlayer[];
  @Input() awayTeamLineup: MatchPlayer[];
  formations = { home: [], away: [] };

  formatedHomeTeam: any[];
  formatedAwayTeam: any[];


  constructor(
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    //Get lines from formation
    if (this.match.formations) {
      this.formations.home = this.match.formations.localteam_formation ? this.match.formations.localteam_formation.split('-') : '';
      this.formations.away = this.match.formations.visitorteam_formation ? this.match.formations.visitorteam_formation.split('-') : '';
    }

    //Sort players by position
    this.homeTeamLineup.sort(function (obj1, obj2) { return obj1.formation_position - obj2.formation_position; });
    this.awayTeamLineup.sort(function (obj1, obj2) { return obj1.formation_position - obj2.formation_position; });

    // Formate for stadium by positions
    this.formatedHomeTeam = this.formateTeamByPositions(this.homeTeamLineup, this.formations.home);
    this.formatedAwayTeam = this.formateTeamByPositions(this.awayTeamLineup, this.formations.away);

    this.cd.markForCheck();
  }

  private formateTeamByPositions(team: MatchPlayer[], formation: any[]): any[] {
    let newTeamArr = [];
    let drawCount = 1;
    formation.forEach(line => {
      let lineCount = parseInt(line);
      newTeamArr.push(team.slice(drawCount, lineCount + drawCount));
      drawCount += lineCount;
    });
    return newTeamArr;
  }

  getLineClass(count: number): string {
    return `col-${12 / count}`;
  }

  getShortName(fullName: string): string {
    let names = fullName.split(' ');
    if (names.length > 1) {
      return `${names[0].charAt(0)}. ${names[1]}`
    }
    return names[0];
  }
}

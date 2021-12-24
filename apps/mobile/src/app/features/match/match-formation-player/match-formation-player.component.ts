import { Component, Input, OnInit } from '@angular/core';
import { MatchPlayer } from '../../../models/match/match-players.model';

@Component({
  selector: 'app-match-formation-player',
  templateUrl: './match-formation-player.component.html',
  styleUrls: ['./match-formation-player.component.scss']
})
export class MatchFormationPlayerComponent implements OnInit {
  @Input() substitutions: any;
  @Input() player: MatchPlayer;
  @Input() isLineup: boolean;
  @Input() away: boolean;
  playerSubstitutionStatus: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.playerSubstitutionStatus = this.getPlayerSubstitutionStatus(this.player.player_id);
  }


  private getPlayerSubstitutionStatus(playerId: number): number {
    if (!this.substitutions && this.substitutions.data) return;

    if (this.substitutions.data.find((s) => s.player_in_id == playerId)) {
      return 1;
    }
    if (this.substitutions.data.find((s) => s.player_out_id == playerId)) {
      return -1;
    }
  }

  convertGoals(goals) {
    var gaolarr = [];
    for (let i = 0; i < parseInt(goals); i++) {
      gaolarr.push(i);
    }
    return gaolarr;
  }

}

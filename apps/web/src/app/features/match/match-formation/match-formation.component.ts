import { Match } from './../../../models/match/match.model';
import { MatchPlayer, MatchPlayers } from './../../../models/match/match-players.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { LivescoreService } from '@goal-front/shared';

@Component({
  selector: 'app-match-formation',
  templateUrl: './match-formation.component.html',
  styleUrls: ['./match-formation.component.scss']
})
export class MatchFormationComponent implements OnInit {
  @Input() match: Match;
  matchPlayers: MatchPlayers;
  private matchId: number;
  private routerSub: Subscription;

  get homeTeamLineup(): MatchPlayer[] {
    if (!this.match || !this.matchPlayers || !this.matchPlayers.lineup) return [];
    return this.matchPlayers.lineup.filter((player) => player.team_id == this.match.localteam_id);
  }

  get awayTeamLineup(): MatchPlayer[] {
    if (!this.match || !this.matchPlayers || !this.matchPlayers.lineup) return [];
    return this.matchPlayers.lineup.filter((player) => player.team_id == this.match.visitorteam_id);
  }

  get homeTeamBench(): MatchPlayer[] {
    if (!this.match || !this.matchPlayers || !this.matchPlayers.lineup) return [];
    return this.matchPlayers.bench.filter((player) => player.team_id == this.match.localteam_id);
  }

  get awayTeamBench(): MatchPlayer[] {
    if (!this.match || !this.matchPlayers || !this.matchPlayers.lineup) return [];
    return this.matchPlayers.bench.filter((player) => player.team_id == this.match.visitorteam_id);
  }


  constructor(
    private activatedRoute: ActivatedRoute,
    private livescoreService: LivescoreService,
    private cd: ChangeDetectorRef
  ) { }


  ngOnInit(): void {
    this.routerSub = this.activatedRoute.paramMap.subscribe(params => {
      this.matchId = parseInt(params.get('id'), 10);
      this.getLineUp();
    });
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }

  private getLineUp() {
    this.livescoreService.getMatchPlayers(this.matchId).subscribe((d: MatchPlayers) => {
      this.matchPlayers = d;
      this.cd.markForCheck();
    });
  }

  trackById(index: number, item: any) {
    return item.player_id;
  }
}

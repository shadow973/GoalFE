import { ChangeDetectorRef, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { LivescoreService, LivescoreStore } from '@goal-front/shared';
import { Subscription } from 'rxjs';
import { MatchComparePlayersModalComponent } from '../match-compare-players-modal/match-compare-players-modal.component';

@Component({
  selector: 'app-match-compare-players',
  templateUrl: './match-compare-players.component.html',
  styleUrls: ['./match-compare-players.component.scss']
})
export class MatchComparePlayersComponent implements OnInit {
  @Input() matchId: number;
  private routerSub: Subscription;
  players: any[];
  chosenPlayers: any[];
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private livescoreService: LivescoreService,
    private livescoreStore: LivescoreStore,
    private cd: ChangeDetectorRef,
    private matDialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.routerSub = this.activatedRoute.paramMap.subscribe(params => {
      this.getPlayers();
    });
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }

  private getPlayers() {
    const partialData = 0;
    const withTop2Players = 1;

    this.cd.markForCheck();
    this.livescoreStore.playersToCompare$().subscribe((players) => {
      this.chosenPlayers = players;
      this.cd.markForCheck();
    });

    this.livescoreService.getMatchPlayers(this.matchId, partialData, withTop2Players).subscribe((data) => {
      this.players = data.lineup;

      for(let player of data.bench) {
        if(player.stats.rating !== null && player.stats.rating != 0.00) this.players.push(player);
      }

      this.livescoreStore.setPlayersToCompare([data.top_players.localteam_top_player, data.top_players.visitorteam_top_player]);
      this.cd.markForCheck();
    });
  }

  openModal() {
    this.matDialog.open(MatchComparePlayersModalComponent, {
      hasBackdrop: true,
      position: {
          top: '0'
      },
      data: {
        players: this.players
      }
    });
  }
}

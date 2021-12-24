import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LivescoreStore } from '@goal-front/shared';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-match-compare-players-modal',
  templateUrl: './match-compare-players-modal.component.html',
  styleUrls: ['./match-compare-players-modal.component.scss']
})
export class MatchComparePlayersModalComponent implements OnInit {
  chosenPlayers: any[];
  chosenPlayerIds: number[];
  visiblePlayers: any[];
  mustChangePlayer: any;

  constructor(
    private livescoreStore: LivescoreStore,
    private matDialogRef: MatDialogRef<MatchComparePlayersModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.livescoreStore.playersToCompare$().subscribe((players) => {
      if(this.chosenPlayers !== players) {
        this.chosenPlayers = players;
        this.chosenPlayerIds = players.map(o => o.player_id);
      }
    });

    this.visiblePlayers = this.data.players;
    this.mustChangePlayer = this.data.mustChangePlayer ?? null;
  }

  close() {
    this.matDialogRef.close();
  }

  handlePlayerClick(player) {
    let players = Object.assign([], this.chosenPlayers);
    const alreadyChosenIdx = players.map(o => o.player_id).indexOf(player.player_id);

    if(alreadyChosenIdx !== -1) {
      players.splice(alreadyChosenIdx, 1);
    } else if(players.length > 1) {
      // if(this.mustChangePlayer) {
      //   const playerIdx = players.map(o => o.player_id).indexOf(this.mustChangePlayer.player_id);
      //   if(playerIdx !== -1) 
      // }

      players = [players[1]];
      players.push(player);
    } else {
      players.push(player);
    }
    
    this.livescoreStore.setPlayersToCompare(players);
  }
}


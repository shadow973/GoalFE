import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatchComparePlayersModalComponent } from '../match-compare-players-modal/match-compare-players-modal.component';

@Component({
  selector: 'app-match-compare-players-item',
  templateUrl: './match-compare-players-item.component.html',
  styleUrls: ['./match-compare-players-item.component.scss']
})
export class MatchComparePlayersItemComponent implements OnInit {
  @Input() player: any;
  @Input() players: any[];

  constructor(
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openModal() {
    this.matDialog.open(MatchComparePlayersModalComponent, {
      hasBackdrop: true,
      position: {
          top: '0'
      },
      data: {
        players: this.players,
        mustChangePlayer: this.player
      }
    });
  }
}

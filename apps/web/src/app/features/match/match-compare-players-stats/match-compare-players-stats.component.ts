import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-compare-players-stats',
  templateUrl: './match-compare-players-stats.component.html',
  styleUrls: ['./match-compare-players-stats.component.scss']
})
export class MatchComparePlayersStatsComponent implements OnInit {
  @Input() player1;
  @Input() player2;

  constructor() { }

  ngOnInit(): void {
    
  }

  getStatClass(stat1, stat2) {
    if(stat1 === stat2) return 'player-stat';

    return stat1 > stat2 ? 'player-stat greater' : 'player-stat'; 
  }
}

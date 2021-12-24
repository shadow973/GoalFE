import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LivescoreService } from '@goal-front/shared';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-match-player-stats',
  templateUrl: './match-player-stats.component.html',
  styleUrls: ['./match-player-stats.component.scss']
})
export class MatchPlayerStatsComponent implements OnInit {
  @Input() matchId: number;
  private routerSub: Subscription;

  stats: any[];
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private livescoreService: LivescoreService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.routerSub = this.activatedRoute.paramMap.subscribe(params => {
      this.getPlayerStats();
    });
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }

  private getPlayerStats() {
    this.livescoreService.getMatchPlayerStats(this.matchId).subscribe((data) => {
      this.stats = data;
      this.cd.markForCheck();
    });
  }

}

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LivescoreService } from '@goal-front/shared';
import { Subscription } from 'rxjs/internal/Subscription';
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'app-match-standings',
  templateUrl: './match-standings.component.html',
  styleUrls: ['./match-standings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchStandingsComponent implements OnInit {
  @Input() matchId: number;
  private routerSub: Subscription;
  standings: any[];
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private livescoreService: LivescoreService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.routerSub = this.activatedRoute.paramMap.subscribe(params => {
      this.matchId = parseInt(params.get('id'), 10);
      this.getStandings();
    });
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }

  imageLinkGenerator(id): string {
    return `${environment.storage}/size/timthumb.php?src=/images/teams/${id}.png&w=20&q=100`;
  }

  private getStandings() {
    this.livescoreService.getMatchStandings(this.matchId).subscribe((data) => {
      this.standings = data && data.length ? data : [];
      this.cd.markForCheck();
    });
  }
}

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LivescoreService } from '@goal-front/shared';
import { Subscription } from 'rxjs/internal/Subscription';
import { Match } from '../../../models/match/match.model';

@Component({
  selector: 'app-match-h2h',
  templateUrl: './match-h2h.component.html',
  styleUrls: ['./match-h2h.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchH2hComponent implements OnInit {
  @Input() match: Match;
  private routerSub: Subscription;
  matches: any[];
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private livescoreService: LivescoreService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.routerSub = this.activatedRoute.paramMap.subscribe(params => {
      this.getH2h();
    });
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }

  private getH2h() {
    const perPage = 10;
    this.livescoreService.getMatchH2h(this.match.match_id, perPage).subscribe((data) => {
      this.matches = data;
      this.cd.markForCheck();
    });
  }
}

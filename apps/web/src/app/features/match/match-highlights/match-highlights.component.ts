import { switchMap } from 'rxjs/operators';
import { Subscription, timer } from 'rxjs';
import { MatchHighlights } from '../../../models/match/match-highlights.model';
import { Component, Input, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Inject, PLATFORM_ID } from '@angular/core';
import { LivescoreService } from '@goal-front/shared';
import { environment } from 'apps/web/src/environments/environment';
import { isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-match-highlights',
  templateUrl: './match-highlights.component.html',
  styleUrls: ['./match-highlights.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchHighlightsComponent implements OnInit {
  @Input() localTeamId: number;
  @Input() visitorTeamId: number;
  @Input() matchId: number;
  @Input() isLive: boolean;

  matchHighLights: MatchHighlights;
  overviewData: any = {
    firstHalf: [],
    secondHalt: []
  };
  loading: boolean;
  private highlightsRefresher: Subscription;

  constructor(
    private livescoreService: LivescoreService,
    private cd: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: string
  ) { }

  ngOnInit(): void {
    this.getMatchHighlights();
  }

  ngOnDestroy(): void {
    this.highlightsRefresher.unsubscribe();
  }

  private getMatchHighlights() {
    if (this.highlightsRefresher) {
      this.highlightsRefresher.unsubscribe();
    }

    this.highlightsRefresher = timer(0, environment.match_refresh_seconds * 1000).pipe(
      switchMap(() => {
        return this.livescoreService.getMatchHighlights(this.matchId)
      })
    ).subscribe((d) => {
      if (!this.isLive || isPlatformServer(this.platformId)) {
        this.highlightsRefresher.unsubscribe();
      }

      this.matchHighLights = d;      
      this.generateByHalfs();
    });
  }

  private generateByHalfs() {
    this.overviewData.firstHalf = [];
    this.overviewData.secondHalf = [];

    if (this.matchHighLights.hasOwnProperty('substitutions')) {
      this.matchHighLights.substitutions.forEach(substitution => {
        substitution.view_type = 'subst';
        substitution.view_position = this.getHighlightPosition(substitution);
        if (substitution.minute > 45)
          this.overviewData.secondHalf.push(substitution);
        else
          this.overviewData.firstHalf.push(substitution);
      });
    }

    if (this.matchHighLights.hasOwnProperty('cards')) {
      this.matchHighLights.cards.forEach(card => {
        card.view_type = 'cards';
        card.view_position = this.getHighlightPosition(card);
        if (card.minute > 45)
          this.overviewData.secondHalf.push(card);
        else
          this.overviewData.firstHalf.push(card);
      });
    }

    if (this.matchHighLights.hasOwnProperty('goals')) {
      this.matchHighLights.goals.forEach(goal => {
        goal.view_type = 'goals';
        goal.view_position = this.getHighlightPosition(goal);
        if (goal.minute > 45)
          this.overviewData.secondHalf.push(goal);
        else
          this.overviewData.firstHalf.push(goal);
      });
    }

    //sort by time
    this.overviewData.firstHalf.sort(function (obj1, obj2) { return obj1.minute - obj2.minute; });
    this.overviewData.secondHalf.sort(function (obj1, obj2) { return obj1.minute - obj2.minute; });

    this.loading = false;
    this.cd.markForCheck();
  }

  private getHighlightPosition(h: any): string {
    if (h.team_id == this.localTeamId) {
      return 'left';
    }
    if (h.team_id == this.visitorTeamId) {
      return 'right';
    }
    return 'center';
  }
}

import { MatchSubstitution, MatchGoal, MatchCard } from './../../../models/match/match-highlights.model';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-highlights-overview',
  templateUrl: './match-highlights-overview.component.html',
  styleUrls: ['./match-highlights-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchHighlightsOverviewComponent implements OnInit {
  @Input() overview: MatchSubstitution & MatchGoal & MatchCard;

  constructor() { }

  ngOnInit(): void {
  }

}

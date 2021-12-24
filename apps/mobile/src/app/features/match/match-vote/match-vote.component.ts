import { Match } from './../../../models/match/match.model';
import { Component, Input, OnInit } from '@angular/core';
import { LivescoreService } from '@goal-front/shared';

@Component({
  selector: 'app-match-vote',
  templateUrl: './match-vote.component.html',
  styleUrls: ['./match-vote.component.scss']
})
export class MatchVoteComponent implements OnInit {
  @Input() match: Match;
  voted: boolean;

  constructor(
    private livescoreService: LivescoreService
  ) { }

  ngOnInit(): void {
  }

  rate(answer: number, matchId: number) {
    this.livescoreService.rateMatch(matchId, answer).subscribe(() => {

    });
  }

  imageLinkGenerator(id): string {
    return `//storage.goal.ge/images/teams/${id}.png`;
  }

  percentage(amount, sum) {
    var perc = (amount * 100) / sum;
    if (!isNaN(perc)) {
      return Math.round(perc);
    } else {
      return 33;
    }
  }

}

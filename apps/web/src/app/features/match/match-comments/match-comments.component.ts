import { Component, Input, OnInit } from '@angular/core';
import { MatchCommentsService } from '@goal-front/shared';

@Component({
  selector: 'app-match-comments',
  templateUrl: './match-comments.component.html',
  styleUrls: ['./match-comments.component.scss']
})
export class MatchCommentsComponent implements OnInit {
  @Input() matchId: number;

  constructor(
    public matchCommentsService: MatchCommentsService
  ) { }

  ngOnInit(): void {
  }

}

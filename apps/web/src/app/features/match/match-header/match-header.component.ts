import { Match } from './../../../models/match/match.model';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { environment } from 'apps/web/src/environments/environment';

@Component({
  selector: 'app-match-header',
  templateUrl: './match-header.component.html',
  styleUrls: ['./match-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchHeaderComponent implements OnInit {
  @Input() match: Match;

  constructor() { }

  ngOnInit(): void {
  }

  imageLinkGenerator(id): string {
    return `${environment.storage}/images/teams/${id}.png`;
  }

}

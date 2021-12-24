import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { environment } from 'apps/web/src/environments/environment';

@Component({
  selector: 'app-my-teams-matches',
  templateUrl: './my-teams-matches.component.html',
  styleUrls: ['./my-teams-matches.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyTeamsMatchesComponent implements OnInit {
  @Input() matches: any[];

  constructor() { }

  ngOnInit(): void {
  }

  imageLinkGeneratorTeam(id) {
    return `${environment.storage}/size/timthumb.php?src=/images/teams/${id}.png&w=64`;
  }

}

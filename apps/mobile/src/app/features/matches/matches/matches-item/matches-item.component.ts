import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { environment } from 'apps/web/src/environments/environment';

@Component({
  selector: 'app-matches-item',
  templateUrl: './matches-item.component.html',
  styleUrls: ['./matches-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchesItemComponent implements OnInit {
  @Input() match: any;

  constructor() { }

  ngOnInit(): void {
  }

  imageLinkGenerator(id): string {
    return `${environment.storage}/size/timthumb.php?src=/images/teams/${id}.png&w=22`;
  }

  imageLinkGeneratorCountry(id): string {
    return `${environment.storage}/images/countries/flags/${id}.svg`;
  }


  imageLinkGeneratorPlayer(id): string {
    return `${environment.storage}/size/timthumb.php?src=/images/players/${id}.png&w=50`;
  }

}

import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { environment } from 'apps/web/src/environments/environment';

@Component({
  selector: 'app-club-player',
  templateUrl: './club-player.component.html',
  styleUrls: ['./club-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClubPlayerComponent implements OnInit {
  @Input() items: any;
  @Input() type: any;

  constructor() { }

  ngOnInit(): void {
  }

  calc(f2) {
    let d1 = new Date();
    let d2 = f2.split("/")
    let sub = d1.getFullYear() - d2[2];
    return sub;
  }

  getCountryImage(countryId: number) {
    return `${environment.storage}/images/countries/flags/${countryId}.svg`;
  }

}

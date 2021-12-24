import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { environment } from 'apps/web/src/environments/environment';

@Component({
  selector: 'app-club-transfers',
  templateUrl: './club-transfers.component.html',
  styleUrls: ['./club-transfers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClubTransfersComponent implements OnInit {
  @Input() transfers: any[];

  constructor() { }

  ngOnInit(): void {
  }

  trackById(index: number, item: any) {
    return item.player_id;
  }

  imageLinkGeneratorPlayer(id) {
    return `${environment.storage}/size/timthumb.php?src=/images/players/${id}.png&w=100`;
  }

  imageLinkGeneratorCountry(id) {
    return `${environment.storage}/images/countries/flags/${id}.svg`;
  }

}

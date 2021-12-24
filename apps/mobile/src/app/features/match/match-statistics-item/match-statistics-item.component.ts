import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-statistics-item',
  templateUrl: './match-statistics-item.component.html',
  styleUrls: ['./match-statistics-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchStatisticsItemComponent implements OnInit {
  @Input() homeStat: any;
  @Input() awayStat: any;
  @Input() title: string;
  @Input() isPercentage: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  getPecent(fn, sn) {
    var sum = parseInt(fn) + parseInt(sn);
    return Math.round(fn * 100 / sum);
  }

}

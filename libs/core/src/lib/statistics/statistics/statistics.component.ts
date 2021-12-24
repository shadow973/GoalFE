import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticsComponent implements OnInit {
  @Input() type: 'small' | 'normal' = 'normal';
  @Input() statistics: any;
  activeTab = 1;

  constructor() {}

  ngOnInit(): void {
  }

  changeTab(tab: number) {
    this.activeTab = tab;
  }

}

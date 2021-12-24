import { Component, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {
  @Input() type: 'small' | 'normal' = 'normal';
  @Input() statistic: any[];
  @Input() statisticType: number;
  private environment: any;

  constructor(
    @Inject('env') env: any
  ) { 
    this.environment = env;
  }

  ngOnInit(): void {
  }

  imageLinkGenerator(imageUrl: string): string {
    return `${this.environment.storage}/size/timthumb.php?src=${imageUrl}&w=50`;
  }

}

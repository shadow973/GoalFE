import { ChangeDetectionStrategy, Component, Input, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TablesComponent implements OnInit {
  @Input() type: 'small' | 'normal' = 'normal';
  @Input() standings: any[];
  activeTab = 1;
  private environment: any;

  constructor(
    @Inject('env') env: any
  ) { 
    this.environment = env;
  }

  ngOnInit(): void {
  }

  changeTab(tab: number) {
    if (this.activeTab == tab) return;
    this.activeTab = tab;
  }

  imageLinkGeneratorTeam(id) {
    return `${this.environment.storage}/size/timthumb.php?src=/images/teams/${id}.png&w=36`;
  }

}

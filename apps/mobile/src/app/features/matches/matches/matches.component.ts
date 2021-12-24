import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchesComponent implements OnInit {
  @Input() matches: any[];

  constructor() { }

  ngOnInit(): void {
  }

  trackById(index: number, item: any) {
    return item.id;
  }

}

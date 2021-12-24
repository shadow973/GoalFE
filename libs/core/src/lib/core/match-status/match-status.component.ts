import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-status',
  templateUrl: './match-status.component.html',
  styleUrls: ['./match-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchStatusComponent implements OnInit {
  @Input() match: any;

  constructor() { }

  ngOnInit(): void {
  }

}

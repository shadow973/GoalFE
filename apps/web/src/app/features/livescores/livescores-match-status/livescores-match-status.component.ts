import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-livescores-match-status',
  templateUrl: './livescores-match-status.component.html',
  styleUrls: ['./livescores-match-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LivescoresMatchStatusComponent implements OnInit {
  @Input() match: any;

  constructor() { }

  ngOnInit(): void {
  }

  getTime(object) {
    let TimeObj = JSON.parse(object);
    let Time = TimeObj.minute;
    // let AddedTime = TimeObj.added_time;
    // let ExtraMinute = TimeObj.extra_minute;
    // currentTime = TimeObj.minute +

    return Time;
  }

}

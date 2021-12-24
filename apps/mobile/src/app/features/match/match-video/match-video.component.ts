import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { SafePipe } from 'libs/shared/src/lib/pipes/safe.pipe';

@Component({
  selector: 'app-match-video',
  templateUrl: './match-video.component.html',
  styleUrls: ['./match-video.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchVideoComponent implements OnInit {
  @Input() video: any;
  url: any;

  constructor(
    private safePipe: SafePipe
  ) { }

  ngOnInit(): void {
    if (this.video && this.video.type == 'video') {
      this.url = this.safePipe.transform(this.video.location, 'resourceUrl');
    }
    if (this.video && this.video.type == 'clip') {
      this.url = this.video.location;
    }
  }

}

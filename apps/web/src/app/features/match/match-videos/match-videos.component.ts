import { ChangeDetectionStrategy, Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { LivescoreService } from '@goal-front/shared';

@Component({
  selector: 'app-match-videos',
  templateUrl: './match-videos.component.html',
  styleUrls: ['./match-videos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchVideosComponent implements OnInit {
  @Input() matchId: number;
  videos: any[];
  loading: boolean = true;

  constructor(
    private livescoreService: LivescoreService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.livescoreService.getMatchVideoHighlights(this.matchId).subscribe((d) => {
      this.loading = false;
      this.videos = d.data;
      this.cd.markForCheck();
    });
  }

}

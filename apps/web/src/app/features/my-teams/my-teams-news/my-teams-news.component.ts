import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { environment } from 'apps/web/src/environments/environment';

@Component({
  selector: 'app-my-teams-news',
  templateUrl: './my-teams-news.component.html',
  styleUrls: ['./my-teams-news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyTeamsNewsComponent implements OnInit {
  @Input() teamNews: any;

  constructor() { }

  ngOnInit(): void {
  }

  imageLinkGenerator(src: string): string {
    return `${environment.storageurlResizerPoster}${src}&w=400`;
  }

}

import { environment } from '../../../../environments/environment';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-news-item',
  templateUrl: './main-news-item.component.html',
  styleUrls: ['./main-news-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainNewsItemComponent implements OnInit {
  @Input() gridView: boolean;
  @Input() newsItem: any;

  constructor() { }

  ngOnInit(): void {
  }

  isWinner(firstScore: number, secondScore: number) {
    return firstScore > secondScore;
  }

  imageLinkGenerator(fileName: string): string {
    return `${environment.storageurlResizerPoster}${fileName}&w=320&q=75`;
  }

  imageLinkGeneratorTeam(id) {
    return `${environment.storage}/size/timthumb.php?src=/images/teams/${id}.png&w=32`;
  }

  imageLinkGeneratorTeamBig(id): string {
    return `${environment.storage}/size/timthumb.php?src=/images/teams/${id}.png&w=45`;
  }

}

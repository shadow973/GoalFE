import { environment } from './../../../../environments/environment';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NewsService } from '@goal-front/shared';

@Component({
  selector: 'app-home-main-news',
  templateUrl: './home-main-news.component.html',
  styleUrls: ['./home-main-news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeMainNewsComponent implements OnInit {
  mainNews: any[];
  loading = true;

  constructor(
    private newsService: NewsService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.newsService.getHomeMainNews().subscribe((d: any) => {
      this.loading = false;
      this.mainNews = d.data;
      this.cd.markForCheck();
    });
  }

  imageLinkGenerator(index, src: string): string {
    return `${environment.storageurlResizerPoster}${src}${(index > 0) ? `&w=345` : '&w=700'}&q=80`;
  }

  imageLinkGeneratorTeamBig(id): string {
    return `${environment.storage}/size/timthumb.php?src=/images/teams/${id}.png&w=45`;
  }

}



import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '@goal-front/shared';
import { environment } from 'apps/mobile/src/environments/environment';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LatestNewsComponent implements OnInit {

  news: any[] = [];
  mainLoading: boolean = true;
  loading: boolean;
  page: number = 1;

  constructor(
    private newsService: NewsService,
    private cd: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getNews();
  }

  private getNews() {
    if (this.loading) return;

    this.loading = true;
    this.newsService.getSidebarNews(this.page, 20).subscribe((news) => {
      this.news = this.news.concat(news.data);
      this.mainLoading = false;
      this.loading = false;
      this.page++;
      this.cd.markForCheck();
    });
  }

  showMore() {
    if (this.page <= 4) {
      this.getNews();
    }
  }

  imageLinkGeneratorTeam(id) {
    return `${environment.storage}/size/timthumb.php?src=/images/teams/${id}.png&w=36`;
  }

  trackById(index: number, item: any) {
    return item.id;
  }

}

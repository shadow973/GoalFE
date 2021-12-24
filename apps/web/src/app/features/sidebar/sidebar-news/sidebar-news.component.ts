import { Router } from '@angular/router';
import { environment } from './../../../../environments/environment';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NewsService } from '@goal-front/shared';

@Component({
  selector: 'app-sidebar-news',
  templateUrl: './sidebar-news.component.html',
  styleUrls: ['./sidebar-news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarNewsComponent implements OnInit {
  news: any[] = [];
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
    this.newsService.getSidebarNews(this.page).subscribe((news) => {
      this.news = this.news.concat(news.data);
      this.loading = false;
      this.page++;
      this.cd.markForCheck();
    });
  }

  showMore() {
    if (this.page > 3) {
      this.router.navigate(['day-news', 1]);
    }
    else {
      this.getNews();
    }
  }

  imageLinkGeneratorTeam(id) {
    return `${environment.storage}/size/timthumb.php?src=/images/teams/${id}.png&w=64`;
  }

  trackById(index: number, item: any) {
    return item.id;
  }

}

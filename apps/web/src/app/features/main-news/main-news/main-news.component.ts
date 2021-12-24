import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { NewsService } from '@goal-front/shared';

@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainNewsComponent implements OnInit, AfterViewInit {
  @Input() gridView: boolean;
  page = 1;
  news: any[] = [];
  afterViewInit: boolean;
  loading: boolean;
  @Input() pageLimit: number;
  @Input() skip = 0;

  constructor(
    private newsService: NewsService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.afterViewInit = true;
    this.cd.detectChanges();
  }

  onScroll() {
    this.getNews();
  }

  private getNews() {
    if (this.loading || (this.pageLimit && this.page > this.pageLimit)) return;

    this.loading = true;

    this.newsService.getNewsByCategory(this.page, 91, 16).subscribe((news) => {
      this.news = this.news.concat(news.data);
      this.page++;
      this.loading = false;
      this.cd.markForCheck();
    });
    
    // this.newsService.getMatchNews().subscribe((news) => {
    //   this.news = this.news.concat(news.data);
    //   this.loading = false;
    //   this.cd.markForCheck();
    // });
  }

  trackById(index: number, item: any) {
    return item.id;
  }

}

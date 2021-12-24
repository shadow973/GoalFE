import { environment } from './../../../../environments/environment';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetaService, NewsService } from '@goal-front/shared';

@Component({
  selector: 'app-day-news',
  templateUrl: './day-news.component.html',
  styleUrls: ['./day-news.component.scss']
})
export class DayNewsComponent implements OnInit {
  newsData: any;
  loading: boolean;
  private routerSub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private newsService: NewsService,
    private router: Router,
    private metaService: MetaService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.routerSub = this.activatedRoute.paramMap.subscribe(params => {
      let page = parseInt(params.get('page'), 10) || 0;
      this.getData(page);
      this.updateMeta(page);
    });
  }

  private updateMeta(page) {
    this.title.setTitle(`დღის ყველა სიახლე - Goal.ge | გვერდი - ${page}`);
    this.metaService.generateTags({
      title: `დღის ყველა სიახლე - Goal.ge | გვერდი - ${page}`,
      description: `გაეცანი დღის ყველა სიახლეს, მატჩების შედეგებს, სატურნირო ცხრილს, სტატისტიკასა და სხვა მნიშვნელოვან ინფორმაციას ჩვენს საიტზე. | გვერდი - ${page}`,
      slug: `day-news/${page}`
    });
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }

  private getData(page: number): void {
    this.loading = true;
    this.newsService.getAllNews(page).subscribe((d) => {
      this.loading = false;
      this.newsData = d;
    })
  }

  pageChanged(page: number) {
    this.router.navigate([`/day-news/${page}`]);
  }

}

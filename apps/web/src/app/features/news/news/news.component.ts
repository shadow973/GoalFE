import { environment } from './../../../../environments/environment';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetaService, NewsCommentsService, NewsService } from '@goal-front/shared';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsComponent implements OnInit {
  loading: boolean;
  fullNews: any;
  descTextSize = 16;
  private routerSub: Subscription;

  newsDescPartOne: string;
  newsDescPartTwo: string;

  newsId: number;

  constructor(
    private newsService: NewsService,
    private activatedRoute: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private metaService: MetaService,
    private title: Title,
    public newsCommentsService: NewsCommentsService
  ) { }

  ngOnInit(): void {
    this.routerSub = this.activatedRoute.paramMap.subscribe(params => {
      const id = parseInt(params.get('id'), 10);
      this.newsId = id;
      this.getNews(id);
    });
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }

  private getNews(id: number): void {
    if(!id) return;
    this.loading = true;
    this.fullNews = undefined;
    this.newsDescPartOne = undefined;
    this.newsDescPartTwo = undefined;
    this.cd.detectChanges();

    this.newsService.getFullNewsById(id).subscribe((news: any) => {
      this.loading = false;
      this.fullNews = news;

      this.title.setTitle(`${this.stripHtml(this.fullNews.title)}`);
      this.metaService.generateTags({
        title: `${this.stripHtml(this.fullNews.title)}`,
        description: this.stripHtml(this.fullNews.content),
        slug: `news/${id}/${this.fullNews.slug}`,
        image: this.imageLinkGenerator(this.fullNews.main_gallery_item?.filename) || ''
      });
      this.cd.detectChanges();
    });
  }

  private stripHtml(html) {
    var temporalDivElement = document.createElement("div");
    temporalDivElement.innerHTML = html;
    let desc = temporalDivElement.textContent || temporalDivElement.innerText || "";
    if(desc){
      desc = desc.substring(0, 250);
    }
    return desc;
  }

  imageLinkGenerator(src: string): string {
    return `${environment.storage}/uploads/posts/${src}`;
  }

  imageLinkGeneratorTeam(id: any): string {
    return `${environment.storage}/images/teams/${id}.png`;
  }

  imageLinkGeneratorCountry(id) {
    return `${environment.storage}/images/countries/flags/${id}.svg`;
  }

  toggleFontSize(isZoom: boolean): void {
    if ((this.descTextSize < 9 && !isZoom) || (this.descTextSize > 30 && isZoom)) return;
    (isZoom) ? this.descTextSize++ : this.descTextSize--;
  }

  videoChecker(item) {
    return '<iframe src=https:' + item + '></iframe>'
  }
}

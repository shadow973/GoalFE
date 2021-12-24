import { environment } from './../../../../environments/environment';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetaService, NewsCommentsService, NewsService } from '@goal-front/shared';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsComponent implements OnInit {
  loading: boolean;
  newsId: number;
  fullNews: any;
  descTextSize = 18;
  private routerSub: Subscription;

  newsDescPartOne: string;
  newsDescPartTwo: string;
  newsDescPartThree: string;

  constructor(
    private newsService: NewsService,
    private activatedRoute: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private metaService: MetaService,
    private title: Title,
    @Inject(PLATFORM_ID) private platformId: string,
    public newsCommentsService: NewsCommentsService
  ) { }

  ngOnInit(): void {
    this.routerSub = this.activatedRoute.paramMap.subscribe(params => {
      this.newsId = parseInt(params.get('id'), 10);
      this.getNews(this.newsId);
    });

    if (window.innerWidth < 393) {
      this.descTextSize = 16;
      this.cd.markForCheck();
    }
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }

  private getNews(id: number): void {
    if (!id) return;
    this.loading = true;
    this.fullNews = undefined;
    this.newsDescPartOne = undefined;
    this.newsDescPartTwo = undefined;
    this.newsDescPartThree = undefined;
    this.cd.detectChanges();

    this.newsService.getFullNewsById(id).subscribe((news: any) => {
      this.loading = false;
      this.fullNews = news;
      this.checkDescriptionForBanner();
      this.cd.detectChanges();

      this.title.setTitle(`${this.stripHtml(this.fullNews.title)}`);
      this.metaService.generateTags({
        title: `${this.stripHtml(this.fullNews.title)}`,
        description: this.stripHtml(this.fullNews.content),
        slug: `news/${id}/${this.fullNews.slug}`,
        image: this.imageLinkGenerator(this.fullNews.main_gallery_item?.filename_webp) || ''
      });
    });
  }

  private stripHtml(html) {
    const temporalDivElement = document.createElement('div');
    temporalDivElement.innerHTML = html;
    let desc = temporalDivElement.textContent || temporalDivElement.innerText || '';
    if (desc) {
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


  checkDescriptionForBanner() {
    if (!isPlatformBrowser(this.platformId) || !this.fullNews.content || this.fullNews.content.length < 5) return;

    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(this.fullNews.content, 'text/html');
    const onlyText = htmlDoc.body.innerText;

    // For Top Promotion
    let firstCutIndex = 0;
    if (onlyText) {
      const cutAfter = 10;
      const pIndex = this.fullNews.content.substring(cutAfter).indexOf('<p');
      if (pIndex != -1) {
        firstCutIndex = cutAfter + pIndex;
      }
      else {
        const brIndex = this.fullNews.content.substring(cutAfter).indexOf('<br />');
        if (brIndex != -1) {
          firstCutIndex = cutAfter + brIndex;
        }
        else {
          const spaceIndex = this.fullNews.content.substring(cutAfter).indexOf(' ');
          firstCutIndex = cutAfter + spaceIndex;
        }
      }

      this.newsDescPartOne = this.fullNews.content.slice(0, firstCutIndex);
      this.newsDescPartTwo = this.fullNews.content.slice(firstCutIndex, this.fullNews.content.length);
    }

    // For Scroll Promotion
    const cutMinLength = 800;
    if (onlyText && onlyText.length > cutMinLength) {
      let secondCutIndex;
      const cutAfter = onlyText.length / 2;

      const brIndex = this.fullNews.content.substring(cutAfter).indexOf('<br />');
      if (brIndex != -1) {
        secondCutIndex = cutAfter + brIndex;
      }
      else {
        const pIndex = this.fullNews.content.substring(cutAfter).indexOf('<p');
        if (pIndex != -1) {
          secondCutIndex = cutAfter + pIndex;
        }
        else {
          const spaceIndex = this.fullNews.content.substring(cutAfter).indexOf(' ');
          secondCutIndex = cutAfter + spaceIndex;
        }
      }

      this.newsDescPartTwo = this.fullNews.content.slice(firstCutIndex, secondCutIndex);
      this.newsDescPartThree = this.fullNews.content.slice(secondCutIndex, this.fullNews.content.length);
    }
  }
}

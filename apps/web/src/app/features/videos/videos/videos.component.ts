import { environment } from './../../../../environments/environment';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetaService, NewsService } from '@goal-front/shared';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideosComponent implements OnInit {
  videoData: any;
  pageId: number;
  pager: any;
  loading: boolean;
  private routerSub: Subscription;

  constructor(
    private newsService: NewsService,
    private cd: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private metaService: MetaService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.routerSub = this.activatedRoute.paramMap.subscribe(params => {
      let page = parseInt(params.get('page'), 10) || 0;
      this.getData(page);
      
      this.title.setTitle('Videos - Goal.ge');
      this.metaService.generateTags( {
        title: 'Videos - Goal.ge',
        description: 'Videos',
        slug: `videos/${page}`
      });
    });
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }

  private getData(page: number): void {
    this.loading = true;
    this.newsService.getVideos(page).subscribe((d) => {
      this.loading = false;
      this.videoData = d;
      this.pageId = d.current_page;
      this.pager = this.generatePagination(this.videoData.total, this.videoData.current_page, this.videoData.per_page);
      this.cd.markForCheck();
    });
  }


  setPage(page) {
    if (page > this.pager.totalPages || page < 1 || page == this.pageId) return;
    this.pageId = page;
    this.router.navigate([`/videos/${page}`]);
  }

  private generatePagination(totalItems: number, currentPage: number = 1, pageSize: number = 10) {
    // calculate total pages
    let totalPages = Math.ceil(totalItems / pageSize);

    let startPage: number, endPage: number;
    currentPage = this.pageId
    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 1 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    let pages = this.range(startPage, endPage + 1);

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }

  private range(start, stop, step = 1) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    if (!step) {
      step = stop < start ? -1 : 1;
    }

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

}

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-news-pagination',
  templateUrl: './main-news-pagination.component.html',
  styleUrls: ['./main-news-pagination.component.scss']
})
export class MainNewsPaginationComponent implements OnInit {
  @Input() gridView: boolean;
  @Input() newsData: any;
  @Input() urlPagination: boolean;
  pager: any = [];
  pageId: number;
  @Output() pageChanged = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
    this.pageId = this.newsData.current_page;
    this.pager = this.generatePagination(this.newsData.total, this.newsData.current_page, this.newsData.per_page);
  }


  trackById(index: number, item: any) {
    return item.id;
  }

  setPage(page) {
    if (page > this.pager.totalPages || page < 1 || page == this.pageId) return;
    this.pageId = page;
    this.pageChanged.emit(page);
    if (this.urlPagination) {
      this.pager = this.generatePagination(this.newsData.total, this.newsData.current_page, this.newsData.per_page);
    }
    else {
      window.scrollTo(0, 0);
    }
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

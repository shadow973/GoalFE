import { environment } from './../../../../environments/environment';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetaService, NewsService } from '@goal-front/shared';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categoryId: number;
  slug: string;
  categoryInfo: any;
  newsData: any;
  gridView: boolean;
  loading: boolean;
  private routerSub: Subscription;
  private pageNumber: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private newsService: NewsService,
    private router: Router,
    private metaService: MetaService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.routerSub = this.activatedRoute.paramMap.subscribe(params => {
      this.categoryId = parseInt(params.get('id'), 10) || 0;
      this.slug = params.get('slug') || '';
      this.pageNumber = parseInt(params.get('page'), 10) || 0;
      this.getCategoryInfo();
      this.getData(this.pageNumber);
    });
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe()
  }

  private updateMeta(){
    this.title.setTitle(`${this.categoryInfo.title} - Goal.ge | გვერდი - ${this.pageNumber}`);
    this.metaService.generateTags({
      title: `${this.categoryInfo.title} - Goal.ge | გვერდი - ${this.pageNumber}`,
      description: `გაეცანი ${this.categoryInfo.title}ს მიმდინარე სიახლეებს, მატჩების შედეგებს, სატურნირო ცხრილს, სტატისტიკასა და სხვა მნიშვნელოვან ინფორმაციას ჩვენს საიტზე. | გვერდი - ${this.pageNumber}`,
      slug: `category/${this.categoryId}/${this.slug}/${this.pageNumber}`
    });
  }

  private getCategoryInfo() {
    this.newsService.getNewsCategoryInfo(this.categoryId).subscribe((c) => {
      this.categoryInfo = c;
      this.updateMeta();
    })
  }

  changeGrid(isGrid): void {
    this.gridView = isGrid;
  }

  private getData(page: number): void {
    this.loading = true;
    this.newsService.getNewsByCategory(page, this.categoryId).subscribe((d) => {
      this.loading = false;
      this.newsData = d;
    })
  }

  pageChanged(page: number) {
    this.pageNumber = page;
    this.router.navigate([`/category/${this.categoryId}/${this.slug}/${page}`]);
  }

}

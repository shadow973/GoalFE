import { Subscription } from 'rxjs';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CoreService, MetaService } from '@goal-front/shared';
import { environment } from 'apps/web/src/environments/environment';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultComponent implements OnInit {
  private page: number;
  query: string;
  searchResults: any;
  loading: boolean;
  private routerSub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private coreService: CoreService,
    private cd: ChangeDetectorRef,
    private router: Router,
    private metaService: MetaService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.routerSub = this.activatedRoute.paramMap.subscribe(params => {
      this.page = parseInt(params.get('page'), 10);
      this.query = params.get('q');
      this.getSearchResults();

      this.title.setTitle(`ძებნა: ${this.query} - Goal.ge`);
      this.metaService.generateTags( {
        title: `ძებნა: ${this.query} - Goal.ge`,
        description: `ძებნა: ${this.query} - Goal.ge`,
        slug: `search/${this.query}/${this.page}`
      });
    });
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }

  private getSearchResults(page?: number): void {
    const p = page || this.page;
    this.loading = true;
    this.cd.markForCheck();
    this.coreService.searchArticles(this.query, p).subscribe((results) => {
      this.loading = false;
      this.searchResults = results;
      this.cd.markForCheck();
    });
  }

  pageChanged(page: number) {
    this.router.navigate([`/search/${this.query}/${page}`]);
  }

}

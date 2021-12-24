import { Subscription } from 'rxjs';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { LivescoreStore } from '@goal-front/shared';

@Component({
  selector: 'app-livescores-content',
  templateUrl: './livescores-content.component.html',
  styleUrls: ['./livescores-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LivescoresContentComponent implements OnInit {
  @Input() showFavorites: boolean;
  private page = 0;
  leagues: any[];
  private leaguesSub: Subscription;
  private paginationSub: Subscription;
  private loaderSub: Subscription = new Subscription();
  loading = true;
  loadingBottom: boolean;
  soundMute = true;

  constructor(
    private livescoreStore: LivescoreStore,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.infiniteScroll();

    this.leaguesSub = this.livescoreStore.leagues$().subscribe((d) => {
      this.leagues = d;
      this.cd.markForCheck();
    });

    this.paginationSub = this.livescoreStore.resetPages$().subscribe((d) => {
      this.page = 1;
      this.cd.markForCheck();
    });

    this.loaderSub.add(this.livescoreStore.loading$().subscribe((l) => {
      this.loading = l;
      this.cd.markForCheck();
    }));

    this.loaderSub.add(this.livescoreStore.loadingBottom$().subscribe((l) => {
      this.loadingBottom = l;
      this.cd.markForCheck();
    }));
  }

  ngOnDestroy(): void {
    this.leaguesSub.unsubscribe();
    this.paginationSub.unsubscribe();
    this.loaderSub.unsubscribe();
  }


  infiniteScroll() {
    this.page++;
    this.livescoreStore.addPage(this.page);
  }

  trackById(index: number, item: any) {
    return item.unique_id;
  }

  toggleMuteSound(): void {
    this.soundMute = !this.soundMute;
    this.livescoreStore.changeGoalSound(this.soundMute);
    this.cd.markForCheck();
  }

}

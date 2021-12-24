import { Subscription } from 'rxjs';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { LivescoreStore } from '@goal-front/shared';

@Component({
  selector: 'app-livescores',
  templateUrl: './livescores.component.html',
  styleUrls: ['./livescores.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LivescoresComponent implements OnInit, OnDestroy {
  showFavEnabled: boolean;
  private showFavSub: Subscription;

  constructor(
    private livescoreStore: LivescoreStore,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.showFavSub = this.livescoreStore.showFavorites$().subscribe((show) => {
      this.showFavEnabled = show;
      this.cd.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.showFavSub.unsubscribe();
  }

}

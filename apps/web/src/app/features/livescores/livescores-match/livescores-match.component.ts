import { Subscription } from 'rxjs';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { LocalStore } from '@goal-front/shared';
import { environment } from 'apps/web/src/environments/environment';
import { LivescoreStore } from '@goal-front/shared';

@Component({
  selector: 'app-livescores-match',
  templateUrl: './livescores-match.component.html',
  styleUrls: ['./livescores-match.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LivescoresMatchComponent implements OnInit {
  @Input() match: any;
  favorite: boolean;
  currentGoals: any = {};
  private favSub: Subscription;

  constructor(
    private localStore: LocalStore,
    private cd: ChangeDetectorRef,
    private livescoreStore: LivescoreStore
  ) { }

  ngOnInit(): void {
    this.favSub = this.localStore.favoriteMatches$().subscribe((fms) => {
      this.favorite = !!(fms.find((fm) => fm == this.match.match_id));
      this.cd.markForCheck();
    });
  }

  ngOnChanges(): void {
    this.checkGoals();
  }

  ngOnDestroy(): void {
    this.favSub.unsubscribe();
  }

  toggleFav(e: Event): void {
    e.preventDefault();
    e.stopImmediatePropagation();
    this.localStore.toggleFavMatch(this.match.match_id);
  }

  imageLinkGenerator(id): string {
    return `${environment.storage}/images/teams/${id}.png`;
  }

  private checkGoals(): void {
    if (this.currentGoals.hasOwnProperty(this.match.match_id)) {

      //local
      if (this.currentGoals[this.match.match_id].local.score < this.match.localteam_score) {
        this.currentGoals[this.match.match_id].local.isgoal = true;
        this.livescoreStore.playGoalSound();
      } else {
        this.currentGoals[this.match.match_id].local.isgoal = false;
      }

      //visitor
      if (this.currentGoals[this.match.match_id].visitor.score < this.match.visitorteam_score) {
        this.currentGoals[this.match.match_id].visitor.isgoal = true;
        this.livescoreStore.playGoalSound();
      } else {
        this.currentGoals[this.match.match_id].visitor.isgoal = false;
      }
      this.currentGoals[this.match.match_id].local.score = this.match.localteam_score;
      this.currentGoals[this.match.match_id].visitor.score = this.match.visitorteam_score;

    }
    else {
      this.currentGoals[this.match.match_id] = {
        local: {
          score: this.match.localteam_score,
          isgoal: false
        },
        visitor: {
          score: this.match.visitorteam_score,
          isgoal: false
        }
      }
    }

    this.cd.markForCheck();
  }

}

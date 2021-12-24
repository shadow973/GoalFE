import { debounceTime, filter, distinctUntilChanged } from 'rxjs/operators';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { LeagueService, LeagueStore } from '@goal-front/shared';

@Component({
  selector: 'app-livescore-league-select',
  templateUrl: './livescore-league-select.component.html',
  styleUrls: ['./livescore-league-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LivescoreLeagueSelectComponent implements OnInit {
  open: boolean;
  topLoading: boolean;
  loading: boolean;

  leagues: any[] = [];
  topLeagues: any[] = [];
  selectedLeague: any;

  searchSub: Subscription;
  searchValueChange$: Subject<string> = new Subject<string>();
  searchValue: string;
  searched: boolean;

  @ViewChild('toggleButton') toggleButton: ElementRef;
  @ViewChild('menu') menu: ElementRef;

  @Output() changed = new EventEmitter();

  constructor(
    private cd: ChangeDetectorRef,
    private renderer2: Renderer2,
    private leagueService: LeagueService,
    private leagueStore: LeagueStore
  ) {}

  ngOnInit(): void {
    //default leagues
    this.getTopLeagues();

    //search listener
    this.searchSub = this.searchValueChange$
      .pipe(
        filter((value: string) => value.length >= 3),
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(() => {
        this.searchLeagues(this.searchValue);
      });

    //toggle listener
    this.renderer2.listen('window', 'click', (e: Event) => {
      if (
        !this.toggleButton.nativeElement.contains(e.target) &&
        !this.menu.nativeElement.contains(e.target)
      ) {
        this.open = false;
        this.cd.markForCheck();
      }
    });
  }

  ngOnDestroy(): void {
    this.searchSub.unsubscribe();
  }

  toggleDropdown(): void {
    this.open = !this.open;
  }

  searchValueChanged(value): void {
    this.searchValueChange$.next(value);
  }

  select(option: any): void {
    this.open = false;
    if (this.selectedLeague == option) return;
    this.selectedLeague = option;
    this.changed.emit(option);
    this.cd.markForCheck();
  }

  private getTopLeagues(): void {
    this.topLoading = true;
    this.cd.markForCheck();

    this.leagueStore.getTopLeagues(null).subscribe((d) => {
      this.topLoading = false;
      this.leagues = d.data;
      this.topLeagues = d.data;
      this.cd.markForCheck();
    });
  }

  private searchLeagues(name?: string): void {
    this.searched = true;
    this.loading = true;
    this.cd.markForCheck();
    this.leagueService.searchLeagues(name).subscribe((d) => {
      this.leagues = d.data;
      this.loading = false;
      this.cd.markForCheck();
    });
  }

  reset(e: Event) {
    e.stopPropagation();

    this.searchValue = '';
    this.leagues = this.topLeagues;
    this.searched = false;
  }
}

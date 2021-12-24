import { environment } from './../../../../environments/environment';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { debounceTime, tap, distinctUntilChanged, switchMap, filter, map } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { CoreService } from '@goal-front/shared';
import { LocalStore } from '@goal-front/shared';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit, OnDestroy {

  searchValue: string;
  loading: boolean;
  result: any;
  private searchValueChange$: Subject<string> = new Subject<string>();
  private searchSub: Subscription;

  hasTeams: boolean;
  hasAricles: boolean;
  hasPlayers: boolean;
  hasLeagues: boolean;

  @ViewChild('input') input: ElementRef;
  @ViewChild('menu') menu: ElementRef;
  favoriteClubs = [];
  favClubsSub: Subscription;
  routerSub: Subscription;


  constructor(
    private coreService: CoreService,
    private cd: ChangeDetectorRef,
    private router: Router,
    private renderer2: Renderer2,
    private localStore: LocalStore
  ) { }


  ngOnInit(): void {
    this.favClubsSub = this.localStore.favoriteClubs$().subscribe((d) => {
      this.favoriteClubs = d;
      this.cd.markForCheck();
    });

    this.searchSub = this.searchValueChange$.pipe(
      tap((value) => {
        if (value.length < 3) {
          this.result = null;
        }
      }),
      debounceTime(300),
      distinctUntilChanged(),
      filter((value: string) => value.length >= 3),
      tap(() => {
        this.loading = true;
        this.cd.markForCheck();
      }),
      switchMap(() => {
        return this.coreService.search(this.searchValue)
          .pipe(
            tap(() => {
              this.loading = false;
              this.cd.markForCheck();
            })
          );
      })
    ).subscribe(
      data => {
        this.result = data;
        this.hasTeams = !!(data.teams && data.teams.length);
        this.hasAricles = !!(data.articles && data.articles.data && data.articles.data.length);
        this.hasPlayers = !!(data.players && data.players.length);
        this.hasLeagues = !!(data.leagues && data.leagues.length);
        this.cd.markForCheck();
      },
      error => console.log(error),
    );

    //toggle listener
    this.renderer2.listen('window', 'click', (e: Event) => {
      if (!this.input.nativeElement.contains(e.target) && (this.menu && !this.menu.nativeElement.contains(e.target))) {
        this.closeResultPopover();
      }
    });

    //router navigated
    this.routerSub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.closeResultPopover();
      }
    });
  }

  ngOnDestroy(): void {
    this.searchSub.unsubscribe();
    this.favClubsSub.unsubscribe();
    this.routerSub.unsubscribe();
  }

  searchValueChanged(value): void {
    this.searchValueChange$.next(value);
  }

  private closeResultPopover() {
    this.searchValue = '';
    this.searchValueChanged(this.searchValue);
    this.cd.markForCheck();
  }

  goToSearch(): void {
    if (!this.searchValue || this.searchValue.length < 1) {
      return;
    }
    this.router.navigate(['search/' + this.searchValue + '/1']);
    this.searchValue = '';
    this.searchValueChanged(this.searchValue);
  }

  toggleSubscribe(e: Event, clubId: number, clubName: string) {
    e.stopPropagation();
    e.preventDefault();
    this.localStore.toggleFavClub(clubId, clubName);
  }

  isClubSubscribed(clubId: number) {
    return !!(this.favoriteClubs.find(m => m.id == clubId));
  }

  teamImageUrl(id): string {
    return `${environment.storage}/images/teams/${id}.png`;
  }

  postImageUrl(fileName: string): string {
    return `${environment.storage}/uploads/posts/${fileName}`;
  }


}

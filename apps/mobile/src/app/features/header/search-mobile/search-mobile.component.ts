import { ChangeDetectorRef, Component, ElementRef, OnInit, Output, Renderer2, ViewChild, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CoreService, LocalStore } from '@goal-front/shared';
import { environment } from 'apps/mobile/src/environments/environment';
import { Subject, Subscription } from 'rxjs';
import { tap, debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-mobile',
  templateUrl: './search-mobile.component.html',
  styleUrls: ['./search-mobile.component.scss']
})
export class SearchMobileComponent implements OnInit {

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

  @Output() searchClosed: EventEmitter<any> = new EventEmitter();


  constructor(
    private coreService: CoreService,
    private cd: ChangeDetectorRef,
    private router: Router,
    private renderer2: Renderer2,
    private localStore: LocalStore
  ) { }


  ngOnInit(): void {
    this.favClubsSub = this.localStore.favorites$().subscribe((d) => {
      if (d) {
        this.favoriteClubs = d.filter(f => f.type == 'club');
      } else {
        this.favoriteClubs = [];
      }
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

  ngAfterViewInit(): void {
    this.input.nativeElement.focus();
  }

  searchValueChanged(value): void {
    this.searchValueChange$.next(value);
  }

  closeResultPopover() {
    this.searchValue = '';
    this.searchValueChanged(this.searchValue);
    this.searchClosed.emit(true);
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

  toggleSubscribe(e: Event, clubId: number, clubName: string, slug: string) {
    e.stopPropagation();
    e.preventDefault();
    this.localStore.toggleFavorites('club', clubId, slug, clubName);
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

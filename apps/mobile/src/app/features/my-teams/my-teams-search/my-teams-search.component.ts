import { ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LocalStore } from '@goal-front/shared';
import { CoreService } from '@goal-front/shared';
import { environment } from 'apps/web/src/environments/environment';
import { Subject, Subscription } from 'rxjs';
import { tap, debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-my-teams-search',
  templateUrl: './my-teams-search.component.html',
  styleUrls: ['./my-teams-search.component.scss']
})
export class MyTeamsSearchComponent implements OnInit {

  searchValue: string;
  loading: boolean;
  result: any[];
  private searchValueChange$: Subject<string> = new Subject<string>();
  private searchSub: Subscription;

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
        return this.coreService.searchTeams(this.searchValue)
          .pipe(
            tap(() => {
              this.loading = false;
              this.cd.markForCheck();
            })
          );
      })
    ).subscribe(
      d => {
        this.result = d.data;
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
}

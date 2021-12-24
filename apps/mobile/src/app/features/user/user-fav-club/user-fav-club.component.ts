import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit, Output, Renderer2, ViewChild, EventEmitter } from '@angular/core';
import { CoreService } from '@goal-front/shared';
import { environment } from 'apps/web/src/environments/environment';
import { Subject, Subscription } from 'rxjs';
import { tap, debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-fav-club',
  templateUrl: './user-fav-club.component.html',
  styleUrls: ['./user-fav-club.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFavClubComponent implements OnInit {
  @Input() club: any;
  @Output() clubSelected: EventEmitter<any> = new EventEmitter();

  searchValue: string;
  loading: boolean;
  result: any[];
  private searchValueChange$: Subject<string> = new Subject<string>();
  private searchSub: Subscription;

  @ViewChild('input') input: ElementRef;
  @ViewChild('menu') menu: ElementRef;


  constructor(
    private coreService: CoreService,
    private cd: ChangeDetectorRef,
    private renderer2: Renderer2
  ) { }


  ngOnInit(): void {
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
  }

  ngAfterViewInit(): void {
    if (this.club) {
      this.searchValue = this.club.name;
      this.cd.detectChanges();
    }
  }

  ngOnDestroy(): void {
    this.searchSub.unsubscribe();
  }

  searchValueChanged(value): void {
    this.searchValueChange$.next(value);
  }

  private closeResultPopover() {
    this.searchValueChanged('');
    this.cd.markForCheck();
  }

  teamImageUrl(id): string {
    return `${environment.storage}/images/teams/${id}.png`;
  }

  selectClub(c: any) {
    this.searchValue = c.name;
    this.closeResultPopover();
    this.clubSelected.emit(c);
  }

}

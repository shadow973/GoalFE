import { ChangeDetectionStrategy, ChangeDetectorRef, Component,EventEmitter, OnInit, Output } from '@angular/core';
import { CoreService } from '@goal-front/shared';
import { Subject, Subscription } from 'rxjs';
import { tap, debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-favorite-search',
  templateUrl: './user-favorite-search.component.html',
  styleUrls: ['./user-favorite-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFavoriteSearchComponent implements OnInit {

  searchValue: string;
  @Output() loading: EventEmitter<boolean> = new EventEmitter();
  @Output() result: EventEmitter<any> = new EventEmitter();
  private searchValueChange$: Subject<string> = new Subject<string>();
  private searchSub: Subscription;


  constructor(
    private coreService: CoreService,
    private cd: ChangeDetectorRef
  ) { }


  ngOnInit(): void {
    this.searchSub = this.searchValueChange$.pipe(
      tap((value) => {
        if (value.length < 3) {
          this.result.emit(null);
        }
      }),
      debounceTime(300),
      distinctUntilChanged(),
      filter((value: string) => value.length >= 3),
      tap(() => {
        this.loading.emit(true);
        this.cd.markForCheck();
      }),
      switchMap(() => {
        return this.coreService.search(this.searchValue)
          .pipe(
            tap(() => {
              this.loading.emit(false);
              this.cd.markForCheck();
            })
          );
      })
    ).subscribe(
      d => {
        this.result.emit(d);
        this.cd.markForCheck();
      },
      error => console.log(error),
    );
  }

  ngOnDestroy(): void {
    this.searchSub.unsubscribe();
  }

  searchValueChanged(value): void {
    this.searchValueChange$.next(value);
  }

}

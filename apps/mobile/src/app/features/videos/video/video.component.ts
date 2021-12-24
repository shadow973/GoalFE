import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { environment } from 'apps/web/src/environments/environment';
import { UserStore } from '@goal-front/shared';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { SlugifyPipe } from '../../../../../../../libs/shared/src/lib/pipes/slugify.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit, OnDestroy {
  @Input() video: any;

  public userId;
  private unsubscribe: Subject<void> = new Subject();

  constructor(
    private userStore: UserStore,
    private slugifyPipe: SlugifyPipe,
    private router: Router
  ) { }

  ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

  ngOnInit(): void {
    this.userStore.userLoggedIn$()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((logged: boolean) => {
        if (logged) {
          this.userId = this.userStore.userData.id;
        }
      });
  }

  imageLinkGenerator(fileName: string): string {
    return `${environment.storageurlResizerPoster}${fileName}&w=450`;
  }

  videoCommentsClick(video){
    this.router.navigate(['/news/', video.id, this.slugifyPipe.transform(video.slug)]);
  }
}

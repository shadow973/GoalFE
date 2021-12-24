import { environment } from '../../../../environments/environment';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Subject } from 'rxjs';
import { UserStore } from '@goal-front/shared';
import { takeUntil } from 'rxjs/operators';
import { SlugifyPipe } from '../../../../../../../libs/shared/src/lib/pipes/slugify.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-news-item',
  templateUrl: './main-news-item.component.html',
  styleUrls: ['./main-news-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainNewsItemComponent implements OnInit, OnDestroy {
  @Input() newsItem: any;
  private imageSize = 450;
  showItem: boolean;
  private unsubscribe: Subject<void> = new Subject();
  public isSmallScreen;
  public userId;
  public fullImage = false;

  constructor(
    private userStore: UserStore,
    private slugifyPipe: SlugifyPipe,
    private router: Router
  ){}

  ngOnInit(): void {
    this.userStore.userLoggedIn$()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((logged: boolean) => {
        if (logged) {
          this.userId = this.userStore.userData.id;
        }
      });
    this.detectWindowWidth(window.innerWidth);
    this.fullImage = !!this.newsItem.test;
    this.detectFullImage();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private detectFullImage(){
    const img = new Image();
    const self = this;
    img.onload = function(){
      self.fullImage = this['width'] === this['height'];
    }
    img.src = this.imageLinkGenerator(this.newsItem.main_gallery_item?.filename_webp);
  }

  isWinner(firstScore: number, secondScore: number) {
    return firstScore > secondScore;
  }

  get localTeamIsWinner(){
    return this.newsItem.matche?.localteam_score > this.newsItem.matche?.visitorteam_score;
  }

  imageLinkGenerator(fileName: string): string {
    return `${environment.storageurlResizerPoster}${fileName}&w=${this.imageSize}&q=80`;
  }

  imageLinkGeneratorTeam(id) {
    return `${environment.storage}/size/timthumb.php?src=/images/teams/${id}.png&w=48`;
  }

  imageLinkGeneratorTeamBig(id): string {
    return `${environment.storage}/size/timthumb.php?src=/images/teams/${id}.png&w=45`;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.detectWindowWidth(event.target.innerWidth);
  }

  private detectWindowWidth(width: number){
    this.isSmallScreen = width < 576;
  }

  videoCommentsClick(newsItem){
    this.router.navigate(['/news/', newsItem.id, this.slugifyPipe.transform(newsItem.slug)]);
  }
}

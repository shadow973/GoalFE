import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { NewsService } from '@goal-front/shared';
import { environment } from 'apps/mobile/src/environments/environment';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeSliderComponent implements OnInit {
  swipeConfig: any;
  slideNews: any[];
  loading: boolean = true;
  private imageSize = 450;
  domLoaded: boolean;
  @ViewChild('swiper', { static: false }) swiperEl: any;

  
  constructor(
    private newsService: NewsService,
    private cd: ChangeDetectorRef
  ) { }


  ngOnInit(): void {
    this.swipeConfig = {
      direction: 'horizontal',
      initialSlide: 0,
      slidesPerView: 1,
      updateOnWindowResize: true,
      preloadImages: false
    };

    this.newsService.getNewsByCategory(1, 2, 6).subscribe((d) => {
      this.loading = false;
      this.slideNews = d.data;
      this.cd.markForCheck();
    });
  }

  slide(next: boolean) {
    if (next) {
      this.swiperEl.directiveRef.swiper().slideNext();
    }
    else {
      this.swiperEl.directiveRef.swiper().slidePrev();
    }
  }

  imageLinkGenerator(fileName: string): string {
    return `${environment.storageurlResizerPoster}${fileName}&w=${this.imageSize}&q=80`;
  }

  imageLinkGeneratorTeam(id) {
    return `${environment.storage}/size/timthumb.php?src=/images/teams/${id}.png&w=36`;
  }

}

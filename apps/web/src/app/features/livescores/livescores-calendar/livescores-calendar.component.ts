import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, Inject, PLATFORM_ID } from '@angular/core';
import * as moment from 'moment';
import { LivescoreStore } from '@goal-front/shared';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-livescores-calendar',
  templateUrl: './livescores-calendar.component.html',
  styleUrls: ['./livescores-calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LivescoresCalendarComponent implements OnInit {
  swipeConfig: any;
  activeSlideIndex: any;
  calendaritems: any[];
  @ViewChild('swiper', { static: true }) swiperEl: any;
  loadSwiper: boolean;

  constructor(
    private livescoreStore: LivescoreStore,
    private cd: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: string
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.swipeConfig = {
        direction: 'horizontal',
        initialSlide: this.activeSlideIndex,
        centeredSlides: true,
        updateOnWindowResize: true,
        slidesPerView: 7
      };      

      this.loadSwiper = true;
      this.cd.detectChanges();
      
      this.generateCalendarDays();
      
    }
  }

  changeDay(day: any) {
    if (this.activeSlideIndex == day.index) return;
    this.activeSlideIndex = day.index;
    this.livescoreStore.setDate(day.dateStr);
  }

  slide(next: boolean) {
    if (next) {
      this.swiperEl.directiveRef.swiper().slideNext();
    }
    else {
      this.swiperEl.directiveRef.swiper().slidePrev();
    }
  }

  private generateCalendarDays(): void {
    var cur = moment();
    cur.add(-11, 'days');
    let data = [];
    for (let i = 0; i < 21; i++) {
      cur.add(+1, 'days');
      data.push({
        index: i,
        day: cur.format('DD'),
        weekDay: cur.format('ddd'),
        dateStr: cur.format('YYYY-MM-DD')
      });
    }
    this.calendaritems = data;
    let today = moment().format('YYYY-MM-DD');
    let todayObj = this.calendaritems.find(ct => ct.dateStr == today);
    this.changeDay(todayObj);
    this.cd.markForCheck();
  }

}

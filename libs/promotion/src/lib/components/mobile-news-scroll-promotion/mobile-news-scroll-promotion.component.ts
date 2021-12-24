import { Component, HostListener, OnInit, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Promotion } from '../promotion/promotion';

@Component({
  selector: 'app-mobile-news-scroll-promotion',
  templateUrl: './mobile-news-scroll-promotion.component.html',
  styleUrls: ['./mobile-news-scroll-promotion.component.scss']
})
export class MobileNewsScrollPromotionComponent extends Promotion implements OnInit {
  elementTop: number = 0;
  id: number = 14;

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}

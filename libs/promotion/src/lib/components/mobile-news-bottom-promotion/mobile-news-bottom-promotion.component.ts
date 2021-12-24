import { Component, OnInit } from '@angular/core';
import { Promotion } from '../promotion/promotion';

@Component({
  selector: 'app-mobile-news-bottom-promotion',
  templateUrl: './mobile-news-bottom-promotion.component.html',
  styleUrls: ['./mobile-news-bottom-promotion.component.scss']
})
export class MobileNewsBottomPromotionComponent extends Promotion implements OnInit {
  id: number = 13;

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

}

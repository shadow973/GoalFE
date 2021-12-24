import { Component, OnInit } from '@angular/core';
import { Promotion } from '../promotion/promotion';

@Component({
  selector: 'app-mobile-news-item-promotion',
  templateUrl: './mobile-news-item-promotion.component.html',
  styleUrls: ['./mobile-news-item-promotion.component.scss']
})
export class MobileNewsItemPromotionComponent extends Promotion implements OnInit {
  id: number = 11;

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

}

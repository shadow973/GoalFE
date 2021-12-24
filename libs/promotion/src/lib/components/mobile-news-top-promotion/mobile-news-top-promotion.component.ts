import { Component, OnInit } from '@angular/core';
import { Promotion } from '../promotion/promotion';

@Component({
  selector: 'app-mobile-news-top-promotion',
  templateUrl: './mobile-news-top-promotion.component.html',
  styleUrls: ['./mobile-news-top-promotion.component.scss']
})
export class MobileNewsTopPromotionComponent extends Promotion implements OnInit {
  id: number = 12;

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

}

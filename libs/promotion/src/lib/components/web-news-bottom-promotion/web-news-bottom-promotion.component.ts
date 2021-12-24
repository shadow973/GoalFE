import { Component, OnInit } from '@angular/core';
import { Promotion } from '../promotion/promotion';

@Component({
  selector: 'app-web-news-bottom-promotion',
  templateUrl: './web-news-bottom-promotion.component.html',
  styleUrls: ['./web-news-bottom-promotion.component.scss']
})
export class WebNewsBottomPromotionComponent extends Promotion implements OnInit {
  id = 7;

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}


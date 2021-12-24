import { Component, OnInit } from '@angular/core';
import { Promotion } from '../promotion/promotion';

@Component({
  selector: 'app-web-news-top-promotion',
  templateUrl: './web-news-top-promotion.component.html',
  styleUrls: ['./web-news-top-promotion.component.scss']
})
export class WebNewsTopPromotionComponent extends Promotion implements OnInit {
  id = 6;

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}

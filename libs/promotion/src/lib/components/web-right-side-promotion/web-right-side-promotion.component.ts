import { Component, OnInit } from '@angular/core';
import { Promotion } from '../promotion/promotion';

@Component({
  selector: 'app-web-right-side-promotion',
  templateUrl: './web-right-side-promotion.component.html',
  styleUrls: ['./web-right-side-promotion.component.scss']
})
export class WebRightSidePromotionComponent extends Promotion implements OnInit {
  id = 3;

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}

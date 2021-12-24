import { Component, OnInit } from '@angular/core';
import { Promotion } from '../promotion/promotion';

@Component({
  selector: 'app-web-left-side-promotion',
  templateUrl: './web-left-side-promotion.component.html',
  styleUrls: ['./web-left-side-promotion.component.scss']
})
export class WebLeftSidePromotionComponent extends Promotion implements OnInit {
  id = 2;

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}

import { Component, OnInit } from '@angular/core';
import { Promotion } from '../promotion/promotion';

@Component({
  selector: 'app-web-popup-promotion',
  templateUrl: './web-popup-promotion.component.html',
  styleUrls: ['./web-popup-promotion.component.scss']
})
export class WebPopupPromotionComponent extends Promotion implements OnInit {
  hideS: boolean;
  id = 5;

  ngOnInit() {
    super.ngOnInit();
  }
  hide(){
    this.hideS = true;
  }

}

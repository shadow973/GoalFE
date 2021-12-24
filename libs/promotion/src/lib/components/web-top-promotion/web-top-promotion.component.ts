import { Promotion } from './../promotion/promotion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-top-promotion',
  templateUrl: './web-top-promotion.component.html',
  styleUrls: ['./web-top-promotion.component.scss']
})
export class WebTopPromotionComponent extends Promotion implements OnInit {
  id = 1;

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}

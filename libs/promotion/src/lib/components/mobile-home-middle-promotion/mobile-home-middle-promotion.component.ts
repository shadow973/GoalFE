import { Component, OnInit } from '@angular/core';
import { Promotion } from '../promotion/promotion';

@Component({
  selector: 'app-mobile-home-middle-promotion',
  templateUrl: './mobile-home-middle-promotion.component.html',
  styleUrls: ['./mobile-home-middle-promotion.component.scss']
})
export class MobileHomeMiddlePromotionComponent extends Promotion implements OnInit {
  id: number = 10;

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}

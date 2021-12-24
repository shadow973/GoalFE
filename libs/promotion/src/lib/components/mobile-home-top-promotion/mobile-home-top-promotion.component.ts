import { Component, OnInit } from '@angular/core';
import { Promotion } from '../promotion/promotion';

@Component({
  selector: 'app-mobile-home-top-promotion',
  templateUrl: './mobile-home-top-promotion.component.html',
  styleUrls: ['./mobile-home-top-promotion.component.scss']
})
export class MobileHomeTopPromotionComponent extends Promotion implements OnInit {
  id: number = 9;

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

}

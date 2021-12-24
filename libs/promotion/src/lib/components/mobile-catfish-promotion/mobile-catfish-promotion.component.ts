import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Promotion } from '../promotion/promotion';

@Component({
  selector: 'app-mobile-catfish-promotion',
  templateUrl: './mobile-catfish-promotion.component.html',
  styleUrls: ['./mobile-catfish-promotion.component.scss']
})
export class MobileCatfishPromotionComponent extends Promotion implements OnInit {
  id = 8;
  hidden: boolean;

  ngOnInit(): void {
    super.ngOnInit();
  }

  hide() {
    this.hidden = true;
  }
}

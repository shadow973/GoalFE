import { Component, OnInit } from '@angular/core';
import { Promotion } from '../promotion/promotion';

@Component({
  selector: 'app-web-sidebar-promotion',
  templateUrl: './web-sidebar-promotion.component.html',
  styleUrls: ['./web-sidebar-promotion.component.scss']
})
export class WebSidebarPromotionComponent extends Promotion implements OnInit {
  id = 4;

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MobileCatfishPromotionComponent } from './components/mobile-catfish-promotion/mobile-catfish-promotion.component';
import { MobileHomeMiddlePromotionComponent } from './components/mobile-home-middle-promotion/mobile-home-middle-promotion.component';
import { MobileHomeTopPromotionComponent } from './components/mobile-home-top-promotion/mobile-home-top-promotion.component';
import { MobileNewsBottomPromotionComponent } from './components/mobile-news-bottom-promotion/mobile-news-bottom-promotion.component';
import { MobileNewsItemPromotionComponent } from './components/mobile-news-item-promotion/mobile-news-item-promotion.component';
import { MobileNewsScrollPromotionComponent } from './components/mobile-news-scroll-promotion/mobile-news-scroll-promotion.component';
import { MobileNewsTopPromotionComponent } from './components/mobile-news-top-promotion/mobile-news-top-promotion.component';
import { WebLeftSidePromotionComponent } from './components/web-left-side-promotion/web-left-side-promotion.component';
import { WebNewsBottomPromotionComponent } from './components/web-news-bottom-promotion/web-news-bottom-promotion.component';
import { WebNewsTopPromotionComponent } from './components/web-news-top-promotion/web-news-top-promotion.component';
import { WebPopupPromotionComponent } from './components/web-popup-promotion/web-popup-promotion.component';
import { WebRightSidePromotionComponent } from './components/web-right-side-promotion/web-right-side-promotion.component';
import { WebSidebarPromotionComponent } from './components/web-sidebar-promotion/web-sidebar-promotion.component';
import { WebTopPromotionComponent } from './components/web-top-promotion/web-top-promotion.component';



@NgModule({
  declarations: [
    WebTopPromotionComponent, 
    WebLeftSidePromotionComponent, 
    WebRightSidePromotionComponent, 
    WebSidebarPromotionComponent, 
    WebNewsTopPromotionComponent, 
    WebNewsBottomPromotionComponent, 
    MobileHomeTopPromotionComponent, 
    MobileHomeMiddlePromotionComponent, 
    MobileCatfishPromotionComponent, 
    MobileNewsTopPromotionComponent, 
    MobileNewsBottomPromotionComponent, 
    MobileNewsScrollPromotionComponent, 
    WebPopupPromotionComponent, 
    MobileNewsItemPromotionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WebTopPromotionComponent, 
    WebLeftSidePromotionComponent, 
    WebRightSidePromotionComponent, 
    WebSidebarPromotionComponent, 
    WebNewsTopPromotionComponent, 
    WebNewsBottomPromotionComponent, 
    MobileHomeTopPromotionComponent, 
    MobileHomeMiddlePromotionComponent, 
    MobileCatfishPromotionComponent, 
    MobileNewsTopPromotionComponent, 
    MobileNewsBottomPromotionComponent, 
    MobileNewsScrollPromotionComponent, 
    WebPopupPromotionComponent, 
    MobileNewsItemPromotionComponent
  ]
})
export class PromotionModule { }

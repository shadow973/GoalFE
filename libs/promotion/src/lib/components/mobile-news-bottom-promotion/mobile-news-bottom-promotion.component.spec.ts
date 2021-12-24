import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNewsBottomPromotionComponent } from './mobile-news-bottom-promotion.component';

describe('MobileNewsBottomPromotionComponent', () => {
  let component: MobileNewsBottomPromotionComponent;
  let fixture: ComponentFixture<MobileNewsBottomPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileNewsBottomPromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileNewsBottomPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

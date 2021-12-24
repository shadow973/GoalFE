import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNewsItemPromotionComponent } from './mobile-news-item-promotion.component';

describe('MobileNewsItemPromotionComponent', () => {
  let component: MobileNewsItemPromotionComponent;
  let fixture: ComponentFixture<MobileNewsItemPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileNewsItemPromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileNewsItemPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

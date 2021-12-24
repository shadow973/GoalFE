import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNewsScrollPromotionComponent } from './mobile-news-scroll-promotion.component';

describe('MobileNewsScrollPromotionComponent', () => {
  let component: MobileNewsScrollPromotionComponent;
  let fixture: ComponentFixture<MobileNewsScrollPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileNewsScrollPromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileNewsScrollPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

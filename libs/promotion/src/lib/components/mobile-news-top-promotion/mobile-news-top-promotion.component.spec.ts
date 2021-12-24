import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNewsTopPromotionComponent } from './mobile-news-top-promotion.component';

describe('MobileNewsTopPromotionComponent', () => {
  let component: MobileNewsTopPromotionComponent;
  let fixture: ComponentFixture<MobileNewsTopPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileNewsTopPromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileNewsTopPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPopupPromotionComponent } from './web-popup-promotion.component';

describe('WebPopupPromotionComponent', () => {
  let component: WebPopupPromotionComponent;
  let fixture: ComponentFixture<WebPopupPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebPopupPromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebPopupPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

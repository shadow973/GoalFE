import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebRightSidePromotionComponent } from './web-right-side-promotion.component';

describe('WebRightSidePromotionComponent', () => {
  let component: WebRightSidePromotionComponent;
  let fixture: ComponentFixture<WebRightSidePromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebRightSidePromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebRightSidePromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

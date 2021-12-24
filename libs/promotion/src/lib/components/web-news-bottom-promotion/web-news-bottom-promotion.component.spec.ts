import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebNewsBottomPromotionComponent } from './web-news-bottom-promotion.component';

describe('WebNewsBottomPromotionComponent', () => {
  let component: WebNewsBottomPromotionComponent;
  let fixture: ComponentFixture<WebNewsBottomPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebNewsBottomPromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebNewsBottomPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebNewsTopPromotionComponent } from './web-news-top-promotion.component';

describe('WebNewsTopPromotionComponent', () => {
  let component: WebNewsTopPromotionComponent;
  let fixture: ComponentFixture<WebNewsTopPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebNewsTopPromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebNewsTopPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

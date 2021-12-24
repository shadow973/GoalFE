import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebTopPromotionComponent } from './web-top-promotion.component';

describe('WebTopPromotionComponent', () => {
  let component: WebTopPromotionComponent;
  let fixture: ComponentFixture<WebTopPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebTopPromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebTopPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

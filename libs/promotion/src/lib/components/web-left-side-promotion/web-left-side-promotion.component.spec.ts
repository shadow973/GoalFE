import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebLeftSidePromotionComponent } from './web-left-side-promotion.component';

describe('WebLeftSidePromotionComponent', () => {
  let component: WebLeftSidePromotionComponent;
  let fixture: ComponentFixture<WebLeftSidePromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebLeftSidePromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebLeftSidePromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

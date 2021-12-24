import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHomeMiddlePromotionComponent } from './mobile-home-middle-promotion.component';

describe('MobileHomeMiddlePromotionComponent', () => {
  let component: MobileHomeMiddlePromotionComponent;
  let fixture: ComponentFixture<MobileHomeMiddlePromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileHomeMiddlePromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileHomeMiddlePromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

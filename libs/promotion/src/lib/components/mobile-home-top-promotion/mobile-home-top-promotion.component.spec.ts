import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHomeTopPromotionComponent } from './mobile-home-top-promotion.component';

describe('MobileHomeTopPromotionComponent', () => {
  let component: MobileHomeTopPromotionComponent;
  let fixture: ComponentFixture<MobileHomeTopPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileHomeTopPromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileHomeTopPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

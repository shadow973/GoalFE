import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCatfishPromotionComponent } from './mobile-catfish-promotion.component';

describe('MobileCatfishPromotionComponent', () => {
  let component: MobileCatfishPromotionComponent;
  let fixture: ComponentFixture<MobileCatfishPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileCatfishPromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileCatfishPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

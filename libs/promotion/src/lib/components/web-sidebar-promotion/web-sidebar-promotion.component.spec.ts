import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSidebarPromotionComponent } from './web-sidebar-promotion.component';

describe('WebSidebarPromotionComponent', () => {
  let component: WebSidebarPromotionComponent;
  let fixture: ComponentFixture<WebSidebarPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebSidebarPromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebSidebarPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

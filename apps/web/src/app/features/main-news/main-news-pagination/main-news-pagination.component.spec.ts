import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNewsPaginationComponent } from './main-news-pagination.component';

describe('MainNewsPaginationComponent', () => {
  let component: MainNewsPaginationComponent;
  let fixture: ComponentFixture<MainNewsPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNewsPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNewsPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

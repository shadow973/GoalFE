import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMainNewsComponent } from './home-main-news.component';

describe('HomeMainNewsComponent', () => {
  let component: HomeMainNewsComponent;
  let fixture: ComponentFixture<HomeMainNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMainNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMainNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

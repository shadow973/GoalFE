import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNewsItemComponent } from './main-news-item.component';

describe('MainNewsItemComponent', () => {
  let component: MainNewsItemComponent;
  let fixture: ComponentFixture<MainNewsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNewsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNewsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

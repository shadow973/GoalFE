import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayNewsComponent } from './day-news.component';

describe('DayNewsComponent', () => {
  let component: DayNewsComponent;
  let fixture: ComponentFixture<DayNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

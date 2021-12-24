import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivescoresCalendarComponent } from './livescores-calendar.component';

describe('LivescoresCalendarComponent', () => {
  let component: LivescoresCalendarComponent;
  let fixture: ComponentFixture<LivescoresCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivescoresCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivescoresCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

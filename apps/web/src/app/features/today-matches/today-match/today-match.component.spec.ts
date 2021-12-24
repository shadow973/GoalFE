import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayMatchComponent } from './today-match.component';

describe('TodayMatchComponent', () => {
  let component: TodayMatchComponent;
  let fixture: ComponentFixture<TodayMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayMatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

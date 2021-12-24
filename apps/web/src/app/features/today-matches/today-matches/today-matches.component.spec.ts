import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayMatchesComponent } from './today-matches.component';

describe('TodayMatchesComponent', () => {
  let component: TodayMatchesComponent;
  let fixture: ComponentFixture<TodayMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayMatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

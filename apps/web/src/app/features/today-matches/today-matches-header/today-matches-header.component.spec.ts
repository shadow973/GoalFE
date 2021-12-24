import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayMatchesHeaderComponent } from './today-matches-header.component';

describe('TodayMatchesHeaderComponent', () => {
  let component: TodayMatchesHeaderComponent;
  let fixture: ComponentFixture<TodayMatchesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayMatchesHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayMatchesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

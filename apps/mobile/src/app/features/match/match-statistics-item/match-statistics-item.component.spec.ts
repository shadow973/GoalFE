import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchStatisticsItemComponent } from './match-statistics-item.component';

describe('MatchStatisticsItemComponent', () => {
  let component: MatchStatisticsItemComponent;
  let fixture: ComponentFixture<MatchStatisticsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchStatisticsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchStatisticsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

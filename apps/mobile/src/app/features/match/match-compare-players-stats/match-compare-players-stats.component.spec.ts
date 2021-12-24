import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchComparePlayersStatsComponent } from './match-compare-players-stats.component';

describe('MatchComparePlayersStatsComponent', () => {
  let component: MatchComparePlayersStatsComponent;
  let fixture: ComponentFixture<MatchComparePlayersStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchComparePlayersStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchComparePlayersStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

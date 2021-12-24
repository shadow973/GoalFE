import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchPlayerStatsItemComponent } from './match-player-stats-item.component';

describe('MatchPlayerStatsItemComponent', () => {
  let component: MatchPlayerStatsItemComponent;
  let fixture: ComponentFixture<MatchPlayerStatsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchPlayerStatsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchPlayerStatsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

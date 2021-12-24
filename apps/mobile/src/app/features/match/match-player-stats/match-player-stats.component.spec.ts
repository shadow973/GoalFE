import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchPlayerStatsComponent } from './match-player-stats.component';

describe('MatchPlayerStatsComponent', () => {
  let component: MatchPlayerStatsComponent;
  let fixture: ComponentFixture<MatchPlayerStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchPlayerStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchPlayerStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivescoreLeagueSelectComponent } from './livescore-league-select.component';

describe('LeagueSelectComponent', () => {
  let component: LivescoreLeagueSelectComponent;
  let fixture: ComponentFixture<LivescoreLeagueSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivescoreLeagueSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivescoreLeagueSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchStandingsComponent } from './match-standings.component';

describe('MatchStandingsComponent', () => {
  let component: MatchStandingsComponent;
  let fixture: ComponentFixture<MatchStandingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchStandingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

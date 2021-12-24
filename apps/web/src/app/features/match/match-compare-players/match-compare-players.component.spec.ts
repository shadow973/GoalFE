import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchComparePlayersComponent } from './match-compare-players.component';

describe('MatchComparePlayersComponent', () => {
  let component: MatchComparePlayersComponent;
  let fixture: ComponentFixture<MatchComparePlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchComparePlayersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchComparePlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

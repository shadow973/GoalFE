import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchComparePlayersItemComponent } from './match-compare-players-item.component';

describe('MatchComparePlayersItemComponent', () => {
  let component: MatchComparePlayersItemComponent;
  let fixture: ComponentFixture<MatchComparePlayersItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchComparePlayersItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchComparePlayersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

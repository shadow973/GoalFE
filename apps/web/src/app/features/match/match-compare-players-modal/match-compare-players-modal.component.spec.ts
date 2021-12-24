import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchComparePlayersModalComponent } from './match-compare-players-modal.component';

describe('MatchComparePlayersModalComponent', () => {
  let component: MatchComparePlayersModalComponent;
  let fixture: ComponentFixture<MatchComparePlayersModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchComparePlayersModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchComparePlayersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

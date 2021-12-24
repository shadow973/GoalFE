import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchVoteComponent } from './match-vote.component';

describe('MatchVoteComponent', () => {
  let component: MatchVoteComponent;
  let fixture: ComponentFixture<MatchVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchVoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

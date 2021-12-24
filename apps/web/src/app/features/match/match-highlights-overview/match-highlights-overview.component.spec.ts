import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchHighlightsOverviewComponent } from './match-highlights-overview.component';

describe('MatchHighlightsOverviewComponent', () => {
  let component: MatchHighlightsOverviewComponent;
  let fixture: ComponentFixture<MatchHighlightsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchHighlightsOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchHighlightsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

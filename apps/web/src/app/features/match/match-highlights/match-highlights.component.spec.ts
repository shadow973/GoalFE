import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchHighlightsComponent } from './match-highlights.component';

describe('MatchHighlightsComponent', () => {
  let component: MatchHighlightsComponent;
  let fixture: ComponentFixture<MatchHighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchHighlightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

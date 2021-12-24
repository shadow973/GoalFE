import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchH2hComponent } from './match-h2h.component';

describe('MatchH2hComponent', () => {
  let component: MatchH2hComponent;
  let fixture: ComponentFixture<MatchH2hComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchH2hComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchH2hComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

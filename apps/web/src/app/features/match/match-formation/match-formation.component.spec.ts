import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchFormationComponent } from './match-formation.component';

describe('MatchFormationComponent', () => {
  let component: MatchFormationComponent;
  let fixture: ComponentFixture<MatchFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

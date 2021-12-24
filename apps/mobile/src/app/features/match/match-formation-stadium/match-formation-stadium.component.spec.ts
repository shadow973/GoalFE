import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchFormationStadiumComponent } from './match-formation-stadium.component';

describe('MatchFormationStadiumComponent', () => {
  let component: MatchFormationStadiumComponent;
  let fixture: ComponentFixture<MatchFormationStadiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchFormationStadiumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchFormationStadiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

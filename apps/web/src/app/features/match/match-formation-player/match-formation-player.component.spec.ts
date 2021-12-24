import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchFormationPlayerComponent } from './match-formation-player.component';

describe('MatchFormationPlayerComponent', () => {
  let component: MatchFormationPlayerComponent;
  let fixture: ComponentFixture<MatchFormationPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchFormationPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchFormationPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

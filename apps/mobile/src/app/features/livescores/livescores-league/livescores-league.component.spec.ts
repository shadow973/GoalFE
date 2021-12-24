import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivescoresLeagueComponent } from './livescores-league.component';

describe('LivescoresLeagueComponent', () => {
  let component: LivescoresLeagueComponent;
  let fixture: ComponentFixture<LivescoresLeagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivescoresLeagueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivescoresLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

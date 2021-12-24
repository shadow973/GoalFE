import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchStatusComponent } from './match-status.component';

describe('MatchStatusComponent', () => {
  let component: MatchStatusComponent;
  let fixture: ComponentFixture<MatchStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

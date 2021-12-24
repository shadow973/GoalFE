import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchH2hItemComponent } from './match-h2h-item.component';

describe('MatchH2hItemComponent', () => {
  let component: MatchH2hItemComponent;
  let fixture: ComponentFixture<MatchH2hItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchH2hItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchH2hItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

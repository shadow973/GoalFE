import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivescoresMatchStatusComponent } from './livescores-match-status.component';

describe('LivescoresMatchStatusComponent', () => {
  let component: LivescoresMatchStatusComponent;
  let fixture: ComponentFixture<LivescoresMatchStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivescoresMatchStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivescoresMatchStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

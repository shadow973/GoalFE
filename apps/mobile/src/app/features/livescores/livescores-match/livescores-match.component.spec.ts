import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivescoresMatchComponent } from './livescores-match.component';

describe('LivescoresMatchComponent', () => {
  let component: LivescoresMatchComponent;
  let fixture: ComponentFixture<LivescoresMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivescoresMatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivescoresMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

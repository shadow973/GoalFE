import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivescoresContentComponent } from './livescores-content.component';

describe('LivescoresContentComponent', () => {
  let component: LivescoresContentComponent;
  let fixture: ComponentFixture<LivescoresContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivescoresContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivescoresContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

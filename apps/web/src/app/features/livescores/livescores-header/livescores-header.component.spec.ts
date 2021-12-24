import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivescoresHeaderComponent } from './livescores-header.component';

describe('LivescoresHeaderComponent', () => {
  let component: LivescoresHeaderComponent;
  let fixture: ComponentFixture<LivescoresHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivescoresHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivescoresHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

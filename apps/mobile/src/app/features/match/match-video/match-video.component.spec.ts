import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchVideoComponent } from './match-video.component';

describe('MatchVideoComponent', () => {
  let component: MatchVideoComponent;
  let fixture: ComponentFixture<MatchVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

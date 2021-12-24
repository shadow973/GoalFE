import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchVideosComponent } from './match-videos.component';

describe('MatchVideosComponent', () => {
  let component: MatchVideosComponent;
  let fixture: ComponentFixture<MatchVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

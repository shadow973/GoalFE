import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubPlayerComponent } from './club-player.component';

describe('ClubPlayerComponent', () => {
  let component: ClubPlayerComponent;
  let fixture: ComponentFixture<ClubPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

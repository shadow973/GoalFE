import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubSidebarStandingsComponent } from './club-sidebar-standings.component';

describe('ClubSidebarStandingsComponent', () => {
  let component: ClubSidebarStandingsComponent;
  let fixture: ComponentFixture<ClubSidebarStandingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubSidebarStandingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubSidebarStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

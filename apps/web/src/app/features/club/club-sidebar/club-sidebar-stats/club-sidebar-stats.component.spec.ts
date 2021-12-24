import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubSidebarStatsComponent } from './club-sidebar-stats.component';

describe('ClubSidebarStatsComponent', () => {
  let component: ClubSidebarStatsComponent;
  let fixture: ComponentFixture<ClubSidebarStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubSidebarStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubSidebarStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

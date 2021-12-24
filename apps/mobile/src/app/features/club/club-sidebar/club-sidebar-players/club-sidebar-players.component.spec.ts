import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubSidebarPlayersComponent } from './club-sidebar-players.component';

describe('ClubSidebarPlayersComponent', () => {
  let component: ClubSidebarPlayersComponent;
  let fixture: ComponentFixture<ClubSidebarPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubSidebarPlayersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubSidebarPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

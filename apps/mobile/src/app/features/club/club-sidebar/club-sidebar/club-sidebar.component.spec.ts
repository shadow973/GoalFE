import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubSidebarComponent } from './club-sidebar.component';

describe('ClubSidebarComponent', () => {
  let component: ClubSidebarComponent;
  let fixture: ComponentFixture<ClubSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

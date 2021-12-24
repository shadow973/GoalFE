import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarStatisticsComponent } from './sidebar-statistics.component';

describe('SidebarStatisticsComponent', () => {
  let component: SidebarStatisticsComponent;
  let fixture: ComponentFixture<SidebarStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

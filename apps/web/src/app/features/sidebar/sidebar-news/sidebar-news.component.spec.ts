import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNewsComponent } from './sidebar-news.component';

describe('SidebarNewsComponent', () => {
  let component: SidebarNewsComponent;
  let fixture: ComponentFixture<SidebarNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarTablesComponent } from './sidebar-tables.component';

describe('SidebarTablesComponent', () => {
  let component: SidebarTablesComponent;
  let fixture: ComponentFixture<SidebarTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarTablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

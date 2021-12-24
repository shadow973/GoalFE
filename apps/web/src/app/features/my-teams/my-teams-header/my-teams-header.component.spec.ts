import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTeamsHeaderComponent } from './my-teams-header.component';

describe('MyTeamsHeaderComponent', () => {
  let component: MyTeamsHeaderComponent;
  let fixture: ComponentFixture<MyTeamsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTeamsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTeamsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

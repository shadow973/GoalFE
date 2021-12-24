import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTeamsMatchesComponent } from './my-teams-matches.component';

describe('MyTeamsMatchesComponent', () => {
  let component: MyTeamsMatchesComponent;
  let fixture: ComponentFixture<MyTeamsMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTeamsMatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTeamsMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

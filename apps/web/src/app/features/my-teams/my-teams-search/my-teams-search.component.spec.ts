import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTeamsSearchComponent } from './my-teams-search.component';

describe('MyTeamsSearchComponent', () => {
  let component: MyTeamsSearchComponent;
  let fixture: ComponentFixture<MyTeamsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTeamsSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTeamsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

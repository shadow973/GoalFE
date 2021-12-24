import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTeamsNewsComponent } from './my-teams-news.component';

describe('MyTeamsNewsComponent', () => {
  let component: MyTeamsNewsComponent;
  let fixture: ComponentFixture<MyTeamsNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTeamsNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTeamsNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

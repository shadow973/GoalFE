import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubLatestNewsComponent } from './club-latest-news.component';

describe('ClubLatestNewsComponent', () => {
  let component: ClubLatestNewsComponent;
  let fixture: ComponentFixture<ClubLatestNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubLatestNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubLatestNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFavClubComponent } from './user-fav-club.component';

describe('UserFavClubComponent', () => {
  let component: UserFavClubComponent;
  let fixture: ComponentFixture<UserFavClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFavClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFavClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

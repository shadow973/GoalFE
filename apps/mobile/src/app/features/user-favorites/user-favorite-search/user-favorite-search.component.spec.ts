import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFavoriteSearchComponent } from './user-favorite-search.component';

describe('UserFavoriteSearchComponent', () => {
  let component: UserFavoriteSearchComponent;
  let fixture: ComponentFixture<UserFavoriteSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFavoriteSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFavoriteSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

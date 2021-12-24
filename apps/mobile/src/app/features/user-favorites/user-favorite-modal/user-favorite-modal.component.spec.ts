import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFavoriteModalComponent } from './user-favorite-modal.component';

describe('UserFavoriteModalComponent', () => {
  let component: UserFavoriteModalComponent;
  let fixture: ComponentFixture<UserFavoriteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFavoriteModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFavoriteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

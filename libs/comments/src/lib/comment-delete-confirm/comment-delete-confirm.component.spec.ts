import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentDeleteConfirmComponent } from './comment-delete-confirm.component';

describe('CommentDeleteConfirmComponent', () => {
  let component: CommentDeleteConfirmComponent;
  let fixture: ComponentFixture<CommentDeleteConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentDeleteConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentDeleteConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsWriteComponent } from './comments-write.component';

describe('CommentsWriteComponent', () => {
  let component: CommentsWriteComponent;
  let fixture: ComponentFixture<CommentsWriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsWriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

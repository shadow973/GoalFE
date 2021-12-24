import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubTransfersComponent } from './club-transfers.component';

describe('ClubTransfersComponent', () => {
  let component: ClubTransfersComponent;
  let fixture: ComponentFixture<ClubTransfersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubTransfersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubTransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

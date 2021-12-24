import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareSocialsComponent } from './share-socials.component';

describe('ShareSocialsComponent', () => {
  let component: ShareSocialsComponent;
  let fixture: ComponentFixture<ShareSocialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareSocialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareSocialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

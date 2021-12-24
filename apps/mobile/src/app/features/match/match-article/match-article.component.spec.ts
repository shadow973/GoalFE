import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchArticleComponent } from './match-article.component';

describe('MatchArticleComponent', () => {
  let component: MatchArticleComponent;
  let fixture: ComponentFixture<MatchArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

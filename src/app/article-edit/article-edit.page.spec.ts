import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleEditPage } from './article-edit.page';

describe('ArticleEditPage', () => {
  let component: ArticleEditPage;
  let fixture: ComponentFixture<ArticleEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

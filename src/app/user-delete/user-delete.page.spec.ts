import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeletePage } from './user-delete.page';

describe('UserDeletePage', () => {
  let component: UserDeletePage;
  let fixture: ComponentFixture<UserDeletePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDeletePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDeletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

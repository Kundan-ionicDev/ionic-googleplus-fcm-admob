import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsucessPage } from './loginsucess.page';

describe('LoginsucessPage', () => {
  let component: LoginsucessPage;
  let fixture: ComponentFixture<LoginsucessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginsucessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginsucessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

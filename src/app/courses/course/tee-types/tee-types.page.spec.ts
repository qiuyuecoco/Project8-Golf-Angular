import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeeTypesPage } from './tee-types.page';

describe('TeeTypesPage', () => {
  let component: TeeTypesPage;
  let fixture: ComponentFixture<TeeTypesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeeTypesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeeTypesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsdetailPage } from './newsdetail.page';

describe('NewsdetailPage', () => {
  let component: NewsdetailPage;
  let fixture: ComponentFixture<NewsdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsdetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

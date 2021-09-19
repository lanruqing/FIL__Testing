import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilBottomLinksComponent } from './fil-bottom-links.component';

describe('FilBottomLinksComponent', () => {
  let component: FilBottomLinksComponent;
  let fixture: ComponentFixture<FilBottomLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilBottomLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilBottomLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

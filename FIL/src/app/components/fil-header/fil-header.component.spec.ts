import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilHeaderComponent } from './fil-header.component';

describe('FilHeaderComponent', () => {
  let component: FilHeaderComponent;
  let fixture: ComponentFixture<FilHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

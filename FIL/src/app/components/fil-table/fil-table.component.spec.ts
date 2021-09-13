import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilTableComponent } from './fil-table.component';

describe('FilTableComponent', () => {
  let component: FilTableComponent;
  let fixture: ComponentFixture<FilTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

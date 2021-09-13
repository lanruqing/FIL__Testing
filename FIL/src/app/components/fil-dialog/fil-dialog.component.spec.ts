import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilDialogComponent } from './fil-dialog.component';

describe('FilDialogComponent', () => {
  let component: FilDialogComponent;
  let fixture: ComponentFixture<FilDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

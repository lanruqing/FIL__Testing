import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilFooterComponent } from './fil-footer.component';

describe('FilFooterComponent', () => {
  let component: FilFooterComponent;
  let fixture: ComponentFixture<FilFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

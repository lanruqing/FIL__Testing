import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilTooltipComponent } from './fil-tooltip.component';

describe('FilTooltipComponent', () => {
  let component: FilTooltipComponent;
  let fixture: ComponentFixture<FilTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

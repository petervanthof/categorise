import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelLinksComponent } from './label-links.component';

describe('LabelLinksComponent', () => {
  let component: LabelLinksComponent;
  let fixture: ComponentFixture<LabelLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecsComponentComponent } from './specs-component.component';

describe('SpecsComponentComponent', () => {
  let component: SpecsComponentComponent;
  let fixture: ComponentFixture<SpecsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

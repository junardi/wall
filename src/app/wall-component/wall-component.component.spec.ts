import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallComponentComponent } from './wall-component.component';

describe('WallComponentComponent', () => {
  let component: WallComponentComponent;
  let fixture: ComponentFixture<WallComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeufComponent } from './neuf.component';

describe('NeufComponent', () => {
  let component: NeufComponent;
  let fixture: ComponentFixture<NeufComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeufComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeufComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

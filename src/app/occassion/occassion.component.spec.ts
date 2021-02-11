import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccassionComponent } from './occassion.component';

describe('OccassionComponent', () => {
  let component: OccassionComponent;
  let fixture: ComponentFixture<OccassionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccassionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccassionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

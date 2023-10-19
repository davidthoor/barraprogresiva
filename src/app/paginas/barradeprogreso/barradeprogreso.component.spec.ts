import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarradeprogresoComponent } from './barradeprogreso.component';

describe('BarradeprogresoComponent', () => {
  let component: BarradeprogresoComponent;
  let fixture: ComponentFixture<BarradeprogresoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarradeprogresoComponent]
    });
    fixture = TestBed.createComponent(BarradeprogresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

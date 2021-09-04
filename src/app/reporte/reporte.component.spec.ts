import { ComponentFixture, TestBed } from '@angular/core/testing';

import { REPORTEComponent } from './reporte.component';

describe('REPORTEComponent', () => {
  let component: REPORTEComponent;
  let fixture: ComponentFixture<REPORTEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ REPORTEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(REPORTEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraeteEmployeeComponent } from './craete-employee.component';

describe('CraeteEmployeeComponent', () => {
  let component: CraeteEmployeeComponent;
  let fixture: ComponentFixture<CraeteEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CraeteEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CraeteEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

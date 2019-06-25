import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SmallLoanComponent} from './small-loan.component';

describe('SmallLoanComponent', () => {
  let component: SmallLoanComponent;
  let fixture: ComponentFixture<SmallLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SmallLoanComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

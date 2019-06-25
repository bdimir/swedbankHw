import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClientAdditionalDataComponent} from './client-additional-data.component';

describe('ClientAdditionalDataComponent', () => {
  let component: ClientAdditionalDataComponent;
  let fixture: ComponentFixture<ClientAdditionalDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClientAdditionalDataComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAdditionalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

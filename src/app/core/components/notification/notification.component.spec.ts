import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {AppNotificationComponent} from './notification.component';
import {MessengerService} from '../../services/messenger.service';

describe('AppNotificationComponent', () => {
  let component: AppNotificationComponent;
  let fixture: ComponentFixture<AppNotificationComponent>;
  let messenger: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [AppNotificationComponent],
      providers: [MessengerService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
    fixture = TestBed.createComponent(AppNotificationComponent);
    messenger = fixture.debugElement.injector.get(MessengerService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should be created notification component', () => {
    expect(component).toBeTruthy();
  });

  it('should show message', async(() => {
    messenger.sendMessage({type: 'warning', text: 'test', timer: 2000});
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.message.textToSend).toEqual('test');
    });
  }));

  it('should hide message', async(() => {
    messenger.sendMessage({type: 'warning', text: 'test', timer: 2000});
    fixture.detectChanges();
    fixture.whenStable()
      .then(() => {
        component.onClick();
      })
      .then(() => {
        expect(component.message.type).toEqual('none');
      });
  }));
});

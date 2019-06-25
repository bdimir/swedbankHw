import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {ROUTES} from '../../app.routes';
import {HomeComponent} from '../../home/home.component';
import {PageNotFoundComponent} from '../page-not-found.component.ts/page-not-found.component';
import {SpinnerComponent} from '../spinner/spinner.component';
import {AppNotificationComponent} from '../notification/notification.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule, MatSliderModule, MatSnackBarModule} from '@angular/material';
import {MessengerService} from '../../services/messenger.service';
import {DataService} from '../../services/data.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        PageNotFoundComponent,
        SpinnerComponent,
        AppNotificationComponent
      ],
      imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}),
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatSliderModule
      ],
      providers: [MessengerService, DataService],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'SwedBank'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Swedbank');
  });

  it('should render title in a div tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').textContent);
  });
});

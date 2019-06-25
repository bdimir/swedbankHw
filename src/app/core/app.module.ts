import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './components/app/app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {PageNotFoundComponent} from './components/page-not-found.component.ts/page-not-found.component';
import {HomeComponent} from './home/home.component';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {MessengerService} from './services/messenger.service';
import {MatProgressSpinnerModule, MatSliderModule, MatSnackBarModule} from '@angular/material';
import {AppNotificationComponent} from './components/notification/notification.component';
import {DataService} from './services/data.service';

@NgModule({
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
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StorageSyncEffects } from 'ngrx-store-ionic-storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SettingsPage } from '../pages/settings/settings';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { reducers, metaReducers } from '../stores';
import { SettingsEffects } from '../stores/settings/settings.effects';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),

    StoreModule.forRoot(reducers, {
      metaReducers,
      initialState: {
        hydrated: false
      }
    }),

    EffectsModule.forRoot([
      StorageSyncEffects,
      SettingsEffects,
      // Your other effects...
    ]),

    // StoreDevtools should be disabled for production.
    // Ionic doesn't natively support environment variables (yet).
    // See https://github.com/ionic-team/ionic-cli/issues/1205
    //
    // Consider rolling your own environment variables:
    // http://tattoocoder.com/angular-cli-using-the-environment-option/
    StoreDevtoolsModule.instrument({ maxAge: 50 })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

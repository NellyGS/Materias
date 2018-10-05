import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HistoriaPage } from '../pages/historia/historia';
import { CsPage } from '../pages/cs/cs';
import { PyePage } from '../pages/pye/pye';
import { DibPage } from '../pages/dib/dib';
import { ComPage } from '../pages/com/com';
import { MiPage } from '../pages/mi/mi';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HistoriaPage,
    CsPage, 
    PyePage,
    DibPage,
    ComPage,
    MiPage                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistoriaPage,
    CsPage,
    PyePage,
    DibPage,
    ComPage,
    MiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

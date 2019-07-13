import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PerguntaInicialPage } from '../pages/pergunta-inicial/pergunta-inicial';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SDKBrowserModule, SDKModels, LoopBackAuth, InternalStorage, RespostaVersaoApi } from './shared/sdk';
import { IonicStorageModule } from '@ionic/storage';
import { SocketDriver } from './shared/sdk/sockets/socket.driver';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PerguntaInicialPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CommonModule,
		HttpClientModule,
    SDKBrowserModule.forRoot(),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PerguntaInicialPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SocketDriver,
		SDKModels,
		LoopBackAuth,
		InternalStorage,
    RespostaVersaoApi,
    CookieService ,
    Storage
  ]
})
export class AppModule {}

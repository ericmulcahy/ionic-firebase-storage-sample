import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AngularFireModule} from "angularfire2";
import {Camera} from "@ionic-native/camera";
import { StorageProvider } from '../providers/storage/storage';
import {AngularFireStorageModule} from "angularfire2/storage";

const firebaseConfig = {
  apiKey: "xx",
  authDomain: "xx",
  databaseURL: "xx",
  projectId: "xx",
  storageBucket: "xx",
  messagingSenderId: "xx"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    StorageProvider
  ]
})
export class AppModule {}

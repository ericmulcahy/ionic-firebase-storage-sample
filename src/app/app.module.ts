import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AngularFireModule} from "angularfire2";
import {Camera} from "@ionic-native/camera";

const firebaseConfig = {
  apiKey: "AIzaSyDwIolzn10oBd1t3CnVG8fsGMMmgyhbBGE",
  authDomain: "sample-project-5dde9.firebaseapp.com",
  databaseURL: "https://sample-project-5dde9.firebaseio.com",
  projectId: "sample-project-5dde9",
  storageBucket: "sample-project-5dde9.appspot.com",
  messagingSenderId: "872919832415"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
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
    Camera
  ]
})
export class AppModule {}

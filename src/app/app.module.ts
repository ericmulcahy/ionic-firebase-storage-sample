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
import {FirestoreObsSamplePage} from "../pages/firestore-obs-sample/firestore-obs-sample";
import { DatabaseProvider } from '../providers/database/database';
import {AngularFirestoreModule} from "angularfire2/firestore";

const firebaseConfig = {
  apiKey: "xxx",
  authDomain: "fir-samples-56b90.firebaseapp.com",
  databaseURL: "https://fir-samples-56b90.firebaseio.com",
  projectId: "fir-samples-56b90",
  storageBucket: "fir-samples-56b90.appspot.com",
  messagingSenderId: "276109523219"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FirestoreObsSamplePage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FirestoreObsSamplePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    StorageProvider,
    DatabaseProvider
  ]
})
export class AppModule {}

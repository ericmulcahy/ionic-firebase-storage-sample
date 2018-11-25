import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-firestore-obs-sample',
  templateUrl: 'firestore-obs-sample.html',
})
export class FirestoreObsSamplePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirestoreObsSamplePage');
  }

}

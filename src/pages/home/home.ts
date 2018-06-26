import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Camera, CameraOptions} from "@ionic-native/camera";
import {StorageProvider} from "../../providers/storage/storage";
import {AngularFireUploadTask} from "angularfire2/storage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private imageData: string;

  constructor(public navCtrl: NavController,
              private camera: Camera,
              public storage: StorageProvider) {

  }

  capture() {
    const options: CameraOptions = {
      quality: 90,
      destinationType: this.camera.DestinationType.DATA_URL,
      saveToPhotoAlbum: false,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options)
      .then(pictureData => {
        this.imageData = pictureData;
        const uploadTask: AngularFireUploadTask = this.storage.saveImage(this.imageData);
        uploadTask.then(result => {
          console.log('upload complete', result);
        }).catch(err => {
          console.log('upload error', err);
        })
      }, err => {
        console.log('An error occurred!', err);
      })
  }

}

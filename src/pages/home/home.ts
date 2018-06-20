import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Camera, CameraOptions} from "@ionic-native/camera";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private imageData: string;

  constructor(public navCtrl: NavController,
              private camera: Camera) {

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
        this.imageData = 'data:image/jpeg;base64,' + pictureData;
      }, err => {
        console.log('An error occurred!', err);
      })
  }

}

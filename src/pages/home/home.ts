import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {Camera, CameraOptions} from "@ionic-native/camera";
import {StorageProvider} from "../../providers/storage/storage";
import {AngularFireUploadTask} from "angularfire2/storage";
import {Observable} from "rxjs/Observable";
import {Upload} from "../../models/upload";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  imageData: string;

  imageSrcUrl: Observable<string | null>;

  selectedFiles: FileList;
  currentUpload: Upload;

  constructor(public navCtrl: NavController,
              public camera: Camera,
              public storage: StorageProvider,
              public toastController: ToastController) {
  }

  loadPicture() {
    this.imageSrcUrl = this.storage.getImage('pic1.png');
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
        const uploadTask: AngularFireUploadTask = this.storage.saveImage(pictureData, 'pic1.png');
        uploadTask.then(result => {
          console.log('upload complete', result);
        }).catch(err => {
          console.log('upload error', err);
        })
      }, err => {
        console.log('An error occurred!', err);
      });
  }

  uploadFile() {
    const file = this.selectedFiles.item(0);
    this.currentUpload = new Upload(file);
    this.storage.pushUpload(this.currentUpload)
      .then(resultingUpload => {
        this.currentUpload = resultingUpload;
        const toast = this.toastController.create({
          message: 'File upload complete!',
          duration: 3000
        });
        toast.present();
      });
  }

  downloadFile() {
    if (!this.currentUpload) {
      console.log('upload a file first!');
      return;
    }

    console.log('staring to download file at url ', this.currentUpload.url);

    // This can be downloaded directly:
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = () => {
      var blob = xhr.response;
      var fileName = 'web_' + this.currentUpload.name;
      var a = document.createElement("a");
      a.href = window.URL.createObjectURL(blob);
      a.download = fileName;
      a.click();
    };
    xhr.open('GET', this.currentUpload.url, true);
    xhr.send();

  }

  detectFiles($event: any) {
    this.selectedFiles = $event.target.files;
  }

}

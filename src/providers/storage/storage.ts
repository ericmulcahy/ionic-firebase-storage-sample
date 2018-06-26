import {Injectable} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from "angularfire2/storage";

@Injectable()
export class StorageProvider {

  constructor(private afStorage: AngularFireStorage) {

  }

  saveImage(imageData: string): AngularFireUploadTask {
    try {
      const storageRef: AngularFireStorageReference = this.afStorage.ref(`/pics/pic1.png`);
      return storageRef.putString(imageData, 'base64', {contentType: 'image/png'});
    } catch (error) {
      console.log('caught:', error);
      throw error;
    }
  }

}

import {Injectable} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from "angularfire2/storage";
import {Observable} from "rxjs/Observable";
import {Upload} from "../../models/upload";
import * as firebase from "firebase";

@Injectable()
export class StorageProvider {

  constructor(private afStorage: AngularFireStorage) {

  }

  listAllFiles() {
    this.afStorage.ref('/pics/');
  }

  getImage(imageName: string): Observable<any> {
    const storageRef: AngularFireStorageReference = this.afStorage.ref(`/pics/${imageName}`);
    return storageRef.getDownloadURL();
  }

  saveImage(imageData: string, imageName: string): AngularFireUploadTask {
    try {
      const storageRef: AngularFireStorageReference = this.afStorage.ref(`/pics/${imageName}`);
      return storageRef.putString(imageData, 'base64', {contentType: 'image/png'});
    } catch (error) {
      console.log('caught:', error);
      throw error;
    }
  }

  saveFile(data: string, dataName: string): AngularFireUploadTask {
    try {
      const storageRef: AngularFireStorageReference = this.afStorage.ref(`/pics/${dataName}`);
      return storageRef.putString(data);
    } catch (error) {
      console.log('caught:', error);
      throw error;
    }
  }

  pushUpload(upload: Upload): Promise<Upload> {
    return new Promise<Upload>((resolve, reject) => {
      // const storageRef: AngularFireStorageReference = this.afStorage.ref(`/pics/${dataName}`);
      const storageRef: firebase.storage.Reference = firebase.storage().ref();
      const uploadTask = storageRef.child(`/uploads/${upload.file.name}`).put(upload.file);

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          // upload in progress
          // upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        }, (error) => {
          // upload failed
          console.log(error);
        },
        () => {
          // upload success
          uploadTask.snapshot.ref.getDownloadURL()
            .then(result => {
              upload.url = result;
            });
          upload.name = upload.file.name;
          resolve(upload);
          // todo optionally update the database saying this file was saved
        }
      );
    });
  }

}

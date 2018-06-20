import {Injectable} from '@angular/core';
import {AngularFireStorage} from "angularfire2/storage";

@Injectable()
export class StorageProvider {

  constructor(private afStorage: AngularFireStorage) {

  }

  saveImage(imageData: string) {

  }

}

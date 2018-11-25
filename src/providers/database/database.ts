import {Injectable} from '@angular/core';
import {AngularFirestore} from "angularfire2/firestore";


@Injectable()
export class DatabaseProvider {

  constructor(private afs: AngularFirestore) {

  }

}

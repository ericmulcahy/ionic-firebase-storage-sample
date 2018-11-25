import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {Item} from "../../models/item";
import * as firebase from "firebase";
import DocumentReference = firebase.firestore.DocumentReference;
import {Observable} from "rxjs";

@Injectable()
export class DatabaseProvider {

  itemsCollection: AngularFirestoreCollection<Item>;

  obsItem: Observable<Item>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = this.afs.collection('items');

  }

  addItem(item: Item) {
    this.itemsCollection.add(item).then((docRef: DocumentReference) => {
      console.log('added item ', docRef);
    });
  }

  setCurrentItem(id: string): Observable<Item> {
    // this.itemsCollection.ref.doc(id).onSnapshot((doc) => {
    //   this.currentItem = {...doc.data(), id: doc.id};
    //   console.log('current item is now', this.currentItem);
    // });

    this.obsItem = this.itemsCollection.doc(id).valueChanges();
    console.log(this.obsItem);
    return this.obsItem;
  }


}





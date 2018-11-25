import {ChangeDetectorRef, Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Item} from "../../models/item";
import {DatabaseProvider} from "../../providers/database/database";
import {Observable} from "rxjs";

@Component({
  selector: 'page-firestore-obs-sample',
  templateUrl: 'firestore-obs-sample.html',
})
export class FirestoreObsSamplePage {

  item: Item;
  itemObs: Observable<Item>;

  newItemText: string;
  loadItemId: string;

  constructor(private db: DatabaseProvider) {
    this.itemObs = this.db.obsItem;
  }

  saveItem() {
    const item: Item = {
      textField: this.newItemText
    };
    this.db.addItem(item);
  }

  loadItem() {
    this.itemObs = this.db.setCurrentItem(this.loadItemId);
    console.log('item obs:', this.itemObs);
  }
}

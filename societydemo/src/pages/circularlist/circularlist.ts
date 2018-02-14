import { CirculardetailsPage } from "./../circulardetails/circulardetails";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: "page-circularlist",
  templateUrl: "circularlist.html"
})
export class CircularlistPage {
  public items = [];
  public Circular: Observable<any[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fdb: AngularFireDatabase
  ) {
    this.Circular = this.fdb
      .list("/societydoc/")
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CircularlistPage");
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  saveItem(item) {
    this.items.push(item);
  }
  viewItem() {
    this.navCtrl.push(CirculardetailsPage);
  }


}

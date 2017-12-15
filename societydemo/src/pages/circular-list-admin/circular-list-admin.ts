import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";
import { CircularDetailAdminPage } from "../circular-detail-admin/circular-detail-admin";
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: "page-circular-list-admin",
  templateUrl: "circular-list-admin.html"
})
export class CircularListAdminPage {
  public items = [];
  public Circular :Observable<any[]>;
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
    console.log("ionViewDidLoad CircularListAdminPage");
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  viewItem() {
    this.navCtrl.push(CircularDetailAdminPage);
  }
  removeCircular(CircularId: string) {
    alert(CircularId);
    // this.events.remove(events);
    this.fdb.object("/societydoc/" + CircularId).remove();
  }

  updateCircular(CircularId, CircularTitle) {
    this.fdb.object("/societydoc/" + CircularId).update({ event_name: CircularTitle });
  }
}

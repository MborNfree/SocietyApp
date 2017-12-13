import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";
import { CircularDetailAdminPage } from "../circular-detail-admin/circular-detail-admin";

@IonicPage()
@Component({
  selector: "page-circular-list-admin",
  templateUrl: "circular-list-admin.html"
})
export class CircularListAdminPage {
  public items = [];
  public Circular = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fdb: AngularFireDatabase
  ) {
    this.fdb
      .list("/documents/")
      .valueChanges()
      .subscribe(_data => {
        this.Circular = _data;
        console.log(this.Circular);
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
  saveItem(item) {
    this.items.push(item);
  }
  viewItem() {
    this.navCtrl.push(CircularDetailAdminPage);
  }
  removeCircular(eventId: string) {
    alert(eventId);
    // this.events.remove(events);
    this.fdb.object("/documents/" + eventId).remove();
  }

  updateCircular(EventId, EventTitle) {
    this.fdb.object("/documents/" + EventId).update({ event_name: EventTitle });
  }
}

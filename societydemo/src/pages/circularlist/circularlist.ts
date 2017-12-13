import { CirculardetailsPage } from "./../circulardetails/circulardetails";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";

@IonicPage()
@Component({
  selector: "page-circularlist",
  templateUrl: "circularlist.html"
})
export class CircularlistPage {
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

  removeCircular(eventId: string) {
    alert(eventId);
    // this.events.remove(events);
    this.fdb.object("/documents/" + eventId).remove();
  }

  updateCircular(EventId, EventTitle) {
    this.fdb.object("/documents/" + EventId).update({ event_name: EventTitle });
  }
}

import { MemberprofilePage } from "./../memberprofile/memberprofile";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";

@IonicPage()
@Component({
  selector: "page-plumberlist",
  templateUrl: "plumberlist.html"
})
export class PlumberlistPage {
  services = [];
  arrData = [];
  public items = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fdb: AngularFireDatabase
  ) {
    this.fdb
      .list("/services/")
      .valueChanges()
      .subscribe(_data => {
        this.items = _data;
        console.log(this.items);
      });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PlumberlistPage");

  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  viewItem(item) {
    this.navCtrl.push(MemberprofilePage, {
      item: item
    });
  }
}

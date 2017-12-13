import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { CommitteeProfileAdminPage } from "../committee-profile-admin/committee-profile-admin";
import { AngularFireDatabase } from "angularfire2/database";

@IonicPage()
@Component({
  selector: "page-committee-list-admin",
  templateUrl: "committee-list-admin.html"
})
export class CommitteeListAdminPage {
  key;
  public items = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fdb: AngularFireDatabase
  ) {
    this.fdb
      .list("/users/")
      .valueChanges()
      .subscribe(_data => {
        this.items = _data;
        console.log(this.items);
      });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CommitteeListAdminPage");
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  viewItem(item) {
    this.navCtrl.push(CommitteeProfileAdminPage, {
      item: item
    });
  }
}

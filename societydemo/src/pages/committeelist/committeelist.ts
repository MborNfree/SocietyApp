import { MemberprofilePage } from "./../memberprofile/memberprofile";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";

@IonicPage()
@Component({
  selector: "page-committeelist",
  templateUrl: "committeelist.html"
})
export class CommitteelistPage {
  public Committeeitems = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fdb: AngularFireDatabase
  ) {
    this.fdb
      .list("/users/")
      .valueChanges()
      .subscribe(_data => {
        this.Committeeitems = _data;
        console.log(this.Committeeitems);
      });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CommitteelistPage");
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

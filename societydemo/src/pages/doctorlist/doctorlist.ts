import { MemberprofilePage } from "./../memberprofile/memberprofile";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";

@IonicPage()
@Component({
  selector: "page-doctorlist",
  templateUrl: "doctorlist.html"
})
export class DoctorlistPage {
  services = [];
  arrData = [];
  public users = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fdb: AngularFireDatabase
  ) {
    this.fdb
      .list("/services/")
      .valueChanges()
      .subscribe(_data => {
        this.users = _data;
        console.log(this.users);
      });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad DoctorlistPage");
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  viewItem(user) {
    this.navCtrl.push(MemberprofilePage, {
      item: user
    });
  }
}

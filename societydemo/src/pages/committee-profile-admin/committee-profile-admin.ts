import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-committee-profile-admin",
  templateUrl: "committee-profile-admin.html"
})
export class CommitteeProfileAdminPage {
  public itemsParam;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itemsParam = navParams.get("item");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CommitteeProfileAdminPage");
  }
}

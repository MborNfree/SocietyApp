import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-user-document-detail-admin",
  templateUrl: "user-document-detail-admin.html"
})
export class UserDocumentDetailAdminPage {
  public itemsParam;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itemsParam = navParams.get("item");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad UserDocumentDetailAdminPage");
  }
}

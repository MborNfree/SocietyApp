import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { UserDocumentDetailAdminPage } from "./../user-document-detail-admin/user-document-detail-admin";

@IonicPage()
@Component({
  selector: "page-user-document-list-admin",
  templateUrl: "user-document-list-admin.html"
})
export class UserDocumentListAdminPage {
  public items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad UserDocumentListAdminPage");
    this.items = [
      { unm: "sinking", documentnm: "1000", document: "fixed" },
      { unm: "sinking", Documentnm: "1000", document: "fixed" },
      { unm: "sinking", Documentnm: "1000", document: "fixed" },
      { unm: "sinking", Documentnm: "1000", document: "fixed" }
    ];
  }

  viewItem(item) {
    this.navCtrl.push(UserDocumentDetailAdminPage, {
      item: item
    });
  }
}

import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-inbox",
  templateUrl: "inbox.html"
})
export class InboxPage {
  toUser: Object;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.toUser = {
      toUserId: "210000198410281948",
      toUserName: "Hancock"
    };
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad InboxPage");
  }
}

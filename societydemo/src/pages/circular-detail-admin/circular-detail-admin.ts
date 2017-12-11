import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";


@IonicPage()
@Component({
  selector: "page-circular-detail-admin",
  templateUrl: "circular-detail-admin.html"
})
export class CircularDetailAdminPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad CircularDetailAdminPage");
  }
}

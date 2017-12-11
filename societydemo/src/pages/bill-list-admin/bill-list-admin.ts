import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";



@IonicPage()
@Component({
  selector: "page-bill-list-admin",
  templateUrl: "bill-list-admin.html"
})
export class BillListAdminPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad BillListAdminPage");
  }
}

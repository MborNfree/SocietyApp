import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-circulardetails",
  templateUrl: "circulardetails.html"
})
export class CirculardetailsPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CirculardetailsPage");
  }
}

import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-eventdetails",
  templateUrl: "eventdetails.html"
})
export class EventdetailsPage {
  showSkip = true;

  public itemsParam;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itemsParam = navParams.get("item");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad EventdetailsPage");
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }
}

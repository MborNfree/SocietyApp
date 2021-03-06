import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-committee-member-profile",
  templateUrl: "committee-member-profile.html"
})
export class CommitteeMemberProfilePage {
  public itemsParam;
  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.itemsParam = navParams.get("item");
  }

  sendSms(cnt: number) {
    var data = { message: "hello world" };
    var modalPage = this.modalCtrl.create("SendSmsModalPage", data);
    modalPage.present();
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad CommitteeMemberProfilePage");
  }
}

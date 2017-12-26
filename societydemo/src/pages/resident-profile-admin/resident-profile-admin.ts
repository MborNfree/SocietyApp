import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";

@IonicPage()
@Component({
  selector: "page-resident-profile-admin",
  templateUrl: "resident-profile-admin.html"
})
export class ResidentProfileAdminPage {
  users: {}[];
  public itemsParam1;
  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private fdb: AngularFireDatabase
  ) {
    this.fdb
      .list("/users/")
      .valueChanges()
      .subscribe(_data => {
        this.users = _data;
        console.log(this.users);
      });

    this.itemsParam1 = navParams.get("item");
  }
  sendSms(cnt: number) {
    var data = { message: "hello world" };
    var modalPage = this.modalCtrl.create("SendSmsModalPage", data);
    modalPage.present();
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad ResidentProfileAdminPage");
  }
}

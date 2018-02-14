
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";
import { ServiceDetailPage } from "../service-detail/service-detail";
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: "page-electricianlist",
  templateUrl: "electricianlist.html"
})
export class ElectricianlistPage {
  public items = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fdb: AngularFireDatabase
  ) { }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ElectricianlistPage");
    var ref = firebase.database().ref("services");
    ref.orderByChild("Service_type").equalTo('Electrician').once("value", (items: any) => {
      console.log(items.key);
      console.log(items.val());

      let users: any = [];

      items.forEach((item) => {
        users.push({
          key: item.key,
          Contact_no: item.val().Contact_no,
          Description: item.val().Description,
          S_ID: item.val().S_ID,
          Service_name: item.val().Service_name,
          Service_type: item.val().Service_type
        });
      });
      this.items = users;
      console.log("Doctor Data: ", this.items);
    });
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  viewItem(item) {
    this.navCtrl.push(ServiceDetailPage, {
      item: item
    });
  }
}

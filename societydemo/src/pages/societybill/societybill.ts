
//import { BillingchargesPage } from './../billingcharges/billingcharges';
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ViewbillPage } from "./../viewbill/viewbill";
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: "page-societybill",
  templateUrl: "societybill.html"
})
export class SocietybillPage {
  gotobilling() {
    this.navCtrl.push(ViewbillPage);
  }
  public uIDParam;
  public username;
  public items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private fdb: AngularFireDatabase) {

    let self = this;
    this.username = window.sessionStorage.getItem("Sessioneml");
    this.uIDParam = sessionStorage.getItem("Sessionuid");

  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SocietybillPage");

    var ref = firebase.database().ref("billing");
    ref.orderByChild("bill_eml").equalTo(window.sessionStorage.getItem("Sessioneml")).once("value", (items : any)=> {
      console.log(items.key);
      console.log(items.val());

      let users : any = [];

      items.forEach((item) =>
      {
        users.push({
          key          : item.key,
          bill_name    : item.val().bill_name,
          bill_eml     : item.val().bill_eml,
          bill_id      : item.val().bill_id,
          bill_period  : item.val().bill_period,
          bill_flat  : item.val().bill_flat,
          total  : item.val().total,

        });
      });
      this.items = users;
      console.log("Doctor Data: ",this.items);
    });
  }

  viewItem(item) {
    this.navCtrl.push(ViewbillPage, {
      item: item
    });
  }
}

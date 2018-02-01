
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
    var ref = firebase.database().ref("billing");


    ref.orderByChild("bill_eml").equalTo(window.sessionStorage.getItem("Sessioneml")).once("child_added", function(snapshot) {
      console.log(snapshot.key);
      console.log(snapshot.val());

      self.items.push(snapshot.val());
      console.log('item'+JSON.stringify(self.items));
    });

  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SocietybillPage");

    // this.items = [
    //   { description1: "SEPT 2017-OCT 2017" },
    //   { description1: "AUG 2017-Sept 2017" },
    //   { description1: "JULY 2017-AUG 2017" },
    //   { description1: "JUN 2017-JULY 2017" },
    //   { description1: "MAY 2017-JUN 2017" },
    //   { description1: "APR 2017-MAY 2017" },
    //   { description1: "MAR 2017-APR 2017" },
    //   { description1: "FEB 2017-MAR 2017" },
    //   { description1: "JAN 2017-FEB 2017" }
    // ];
  }

  viewItem(item) {
    this.navCtrl.push(ViewbillPage, {
      item: item
    });
  }
}

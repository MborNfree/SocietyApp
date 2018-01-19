import { PaymentPage } from "./../payment/payment";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-billingcharges",
  templateUrl: "billingcharges.html"
})
export class BillingchargesPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log("ionViewDidLoad BillingchargesPage");
  }

  gotopayment() {
    this.navCtrl.push(PaymentPage);
  }
}
